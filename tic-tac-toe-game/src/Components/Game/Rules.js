import './../../style/PlayingField/rules.css'

export const Rules = () => {

    return(
        <div className="rules">
            <div className='rules_container'>
                <h2 data-testid='how_to_play'>How to Play</h2>
                <p>You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? That's what most people think. But if you really wrap your brain around it, you'll discover that Tic-Tac-Toe isn't quite as simple as you think!</p>
                <p>Tic-Tac -Toe (along with a lot of other games) involves looking ahead and trying to figure out what the person playing against you might do next.</p>
                <p></p>
                <h2>Rules for Tic-Tac-Toe</h2>
                <ol>
                    <li>The game is played on a grid that's 3 squares by 3 squares.</li>
                    <li>You are X , your friend (or the computer in this case) is O . Players take turns putting their marks in empty squares.</li>
                    <li>The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.</li>
                    <li>When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.</li>
                </ol>
            </div>
        </div>
    )
}