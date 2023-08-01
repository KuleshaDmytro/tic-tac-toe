import { useState } from "react";
import { createArray } from "../Components/utils/array";
import { EMPTY, X, O } from '../state/cellstate';
import {Howl} from 'howler';
import click from './../sounds/select-sound.mp3'

const MAX_MATRIX_LENGTH = 3;

const createField = () => createArray(MAX_MATRIX_LENGTH, ()=>createArray(MAX_MATRIX_LENGTH, () => {
    return 0;
}));

export const useGameState = () => {
    const [state, setState] = useState({
        matrix: createField(),
        num: 0,
        won: false,

    })
    const reset = () => {
      setState({
        matrix: createField(),
        num: 0,
        won: false,
 
      })
    }
    
    const fire = (x, y) => {

      let sound = new Howl({
        src: [click]
      });

      sound.play();

      
      const cell = state.matrix[y][x];
      
      if (cell === X || cell === O) {
        return;
      }
    
      // Оновлення матриці залежно від номера кроку
      const updatedMatrix = [...state.matrix];
      updatedMatrix[y][x] = state.num % 2 === 0 ? X : O;
      // Перевірка на перемогу
      const winningCombinations = [
        // Горизонтальні комбінації
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // Вертикальні комбінації
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // Діагональні комбінації
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],
      ];
    
    
      let won = false;
      let who = 0;
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        const valueA = updatedMatrix[a[0]][a[1]];
        const valueB = updatedMatrix[b[0]][b[1]];
        const valueC = updatedMatrix[c[0]][c[1]];
    
        if (valueA !== EMPTY && valueA === valueB && valueA === valueC) {
          who = valueA;
          won = true;
          break;
        }
      }
    
      setState({
        matrix: updatedMatrix,
        num: state.num + 1,
        won: won,
        who: who,
      });
    };

    const {num, matrix, won, who} = state;
    return {num, reset, matrix, fire, won, who};
}