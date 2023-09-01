// import { renderHook, act } from '@testing-library/react'
// import { useGameState } from './useGameState';

// describe('useGameState', () => {
//   it('should initialize with the correct initial state', () => {
//     const { result } = renderHook(() => useGameState());

//     expect(result.current.num).toBe(0);
//     expect(result.current.matrix).toHaveLength(3);
//     expect(result.current.matrix[0]).toHaveLength(3);
//     expect(result.current.matrix[1]).toHaveLength(3);
//     expect(result.current.matrix[2]).toHaveLength(3);
//     expect(result.current.won).toBeFalsy();
//     expect(result.current.who).toBe(0);
//   });

//   it('should update state correctly when firing a cell', () => {
//     const { result } = renderHook(() => useGameState());

//     act(() => {
//       result.current.fire(0, 0);
//     });
//     expect(result.current.matrix[0][0]).toBe(1);
//     expect(result.current.num).toBe(1);
//     expect(result.current.won).toBeFalsy();

//     act(() => {
//         result.current.fire(1, 0);
//     });
//     expect(result.current.matrix[1][0]).toBe(2);
//     expect(result.current.num).toBe(2);
//     expect(result.current.won).toBeFalsy();


//     act(() => {
//         result.current.fire(0, 1);
//     });
//     expect(result.current.matrix[0][1]).toBe(1);
//     expect(result.current.num).toBe(3);
//     expect(result.current.won).toBeFalsy();

//     act(() => {
//         result.current.fire(1, 1);
//     });
//     expect(result.current.matrix[1][1]).toBe(2);
//     expect(result.current.num).toBe(4);
//     expect(result.current.won).toBeFalsy();
    
//     act(() => {
//         result.current.fire(0, 2);
//     });
//     expect(result.current.matrix[0][2]).toBe(1);
//     expect(result.current.num).toBe(5);
//     expect(result.current.won).toBeTruthy();

//   });


//   it('should reset state correctly', () => {
//     const { result } = renderHook(() => useGameState());

//     act(() => {
//       result.current.fire(0, 0);
//     });

//     expect(result.current.matrix[0][0]).toBe(1);

//     act(() => {
//       result.current.reset();
//     });

//     expect(result.current.num).toBe(0);
//     expect(result.current.matrix[0][0]).toBe(0);
//     expect(result.current.won).toBe(false);
//     expect(result.current.who).toBe(0);
//   });
// });
