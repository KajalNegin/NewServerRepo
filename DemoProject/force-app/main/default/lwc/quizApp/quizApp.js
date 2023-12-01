import { LightningElement ,track,wire,api} from 'lwc';

export default class QuizApp extends LightningElement {
    selected ={}
    correctAnswers=0;
    issubmitted=false;
    myQuestions=[
        {
        id : "Question1",
        question : "Which one of the following is not a looping template ? ",
        answers :{
            a:"for:each",
            b:"mao loop",
            c:"iterator"
        },
        correctAnswer:"b"

    },
    {
        id : "Question2",
        question : "Which one of the following is invalid in Lwc component folder ? ",
        answers :{
            a:".svg",
            b:".apx",
            c:".html"
        },
        correctAnswer:"b"

    },
    {
        id : "Question3",
        question : "Which one of the following is not a directive ? ",
        answers :{
            a:"for:each",
            b:"if:true",
            c:"@track"
        },
        correctAnswer:"c"

    }
]



changeHandler(event){
    console.log('event value', event.target.value);
    console.log('event name', event.target.name);
    const {name,value} =event.target;
    this.selected={...this.selected ,[name] : value};

}

get allSelected(){
return !(Object.keys(this.selected).length === this.myQuestions.length) ;
}

submitHandler(event){
event.preventDefault();
let correctans=this.myQuestions.filter(item=> this.selected[item.id] === item.correctAnswer);
this.correctAnswers=correctans.length;
console.log('this.correctAnswers',this.correctAnswers)
this.issubmitted=true;
}

resetHandler(){
    this.selected={}
    this.correctAnswers=0;
}
get isscoredfull(){
    return `slds-text-heading_large ${this.myQuestions.length==this.correctAnswers? 'slds-text-color_success':'slds-text-color_error'}`;
}
}