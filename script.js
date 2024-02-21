//function play(){
    // hide the home screen
    // show the play ground
    //console.log('play start now');
    //const homeSection= document.getElementById('home-screen');
    //console.log(homeSection.classList)
    //homeSection.classList.add('hidden');

    //show the playground
    //const playgroundSection=document.getElementById('play-ground');
    //playgroundSection.classList.remove('hidden');
    //console.log(playgroundSection.classList)

//}
function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key;
    //console.log('player pressed', playerPressed);
    // stop the game
    if(playerPressed==='Escape'){
        gameOver();

    }
    //get the expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet= currentAlphabet.toLowerCase();
    // check matched or not
    if(playerPressed===expectedAlphabet){
        console.log('you get a point');
        const currentScore=getTextElementValueById('current-score');
        const updatedScore=currentScore+1;
        setTextElementValueById('current-score',updatedScore);




        //get the current score
        //const currentScoreElement=document.getElementById('current-score');
        //const currentScoreText=currentScoreElement.innerText;
        //const currentScore=parseInt(currentScoreText);
        //console.log(currentScore);
        //const currentScore=getTextElementValueById('current-score');
        //increase score
        //const newScore=currentScore+1;
        //show the update score
       // currentScoreElement.innerText=newScore;

        //console.log('you pressed correctly',expectedAlphabet);
        //removeBackgroundColorById(expectedAlphabet);
        removeBackgrounColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed.you loss a life');
        const currentLife=getTextElementValueById("current-life");
        const updatedLife=currentLife-1;
        setTextElementValueById('current-life',updatedLife);
        // get the current life number
        //const currentLifeElement=document.getElementById('current-life');
        //const currentLifeText=currentLifeElement.innerText;
       // const currentElement=parseInt(currentLifeText);

       // const newLife=currentElement-1;
        //currentLifeElement.innerText=newLife;


        //reduce the life number
        if(updatedLife===0){
            gameOver();
        }
    }

}
document.addEventListener('keyup',handleKeyboardKeyUpEvent)
function continueGame(){
    //step-1 Generate a random alphabet
    const alphabet=getARandomAlphabet();
    //console.log('your random alphabet',alphabet)
    //set reandomly generate  alphabet to the screen
    const currentAlphabetElement= document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    //set backgroundcolor
    setBackgroundColorById(alphabet);
    //removeBackgroundColorById(alphabet);

}
function play(){
    //hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    //reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame()

}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //update final Score
    //1.get the final score
    const lastScore=getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);
    //clear the last selected alphabet
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgrounColorById(currentAlphabet);


}