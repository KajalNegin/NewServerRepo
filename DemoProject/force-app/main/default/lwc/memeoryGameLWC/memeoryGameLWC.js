import { LightningElement } from 'lwc';
//loadstyle is used when we are loading a third party library .Its used with rendered callback hook.
import {loadStyle} from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome';
export default class MemeoryGameLWC extends LightningElement {
    
    isLibLoaded = false;
    
    cards =[
        {id:1 , listClass:"card"  , type :"diamond",icon :"fa fa-diamond"},
        {id:2 , listClass:"card"  , type :"diamond",icon :"fa fa-diamond"},
        {id:3 , listClass:"card"  , type :"cube",icon :"fa fa-cube"},
        {id:4 , listClass:"card"  , type :"bolt",icon :"fa fa-bolt"},
        {id:5 , listClass:"card"  , type :"anchor",icon :"fa fa-anchor"},
        {id:6 , listClass:"card"  , type :"plane",icon :"fa fa-paper-plane-o"},
        {id:7 , listClass:"card"  , type :"leaf",icon :"fa fa-leaf"},
        {id:8 , listClass:"card"  , type :"bicycle",icon :"fa fa-bicycle"},
        {id:9 , listClass:"card"  , type :"bomb",icon :"fa fa-bomb"},
        {id:10 , listClass:"card"  , type :"cube",icon :"fa fa-cube"},
        {id:11 , listClass:"card"  , type :"bomb",icon :"fa fa-bomn"},
        {id:12 , listClass:"card"  , type :"bicycle",icon :"fa fa-bicycle"},
        {id:13 , listClass:"card"  , type :"leaf",icon :"fa fa-leaf"},
        {id:14 , listClass:"card"  , type :"plane",icon :"fa fa-paper-plane-o"},
        {id:15 , listClass:"card"  , type :"anchor",icon :"fa fa-anchor"},
        {id:16 , listClass:"card"  , type :"bolt",icon :"fa fa-bolt"}
    ]
    renderedCallback(){
        if(this.isLibLoaded==false){
            //this is a promise call
        loadStyle(this,fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
            console.log('Lodaed Successfully');
            this.isLibLoaded = true;
        }).catch(err=>{
            console.error(err;
        })

        }else{
            //dont load
            return;
        }
        
    }
}