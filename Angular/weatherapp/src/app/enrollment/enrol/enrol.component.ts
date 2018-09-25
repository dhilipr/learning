import { Component, OnInit } from '@angular/core';
import { SpeechRecognitionService } from '../../services/voice.service';
@Component({
  selector: 'app-enrol',
  templateUrl: './enrol.component.html',
  styleUrls: ['./enrol.component.css']
})
export class EnrolComponent implements OnInit {
  speechData;
  languagespeechData;
  constructor(private speechRecognitionService: SpeechRecognitionService) {
    this.speechData = "";
    this.languagespeechData = "";
   }

   ngOnInit() {
    console.log("hello")
}

ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
}

activateLanguageSpeech(): void {
       
  

  this.speechRecognitionService.record()
      .subscribe(
      //listener
      (value) => {
         
          this.languagespeechData = value;
          console.log(value);
      },
      //errror
      (err) => {
          console.log(err);
          if (err.error == "no-speech") {
              console.log("--restatring service--");
              this.activateLanguageSpeech();
          }
      },
      //completion
      () => {
          
          console.log("--complete--");
          this.activateLanguageSpeech();
      });
}

activateSpeech(): void {
       
  

  this.speechRecognitionService.record()
      .subscribe(
      //listener
      (value) => {
          this.speechData = value;
         
          console.log(value);
      },
      //errror
      (err) => {
          console.log(err);
          if (err.error == "no-speech") {
              console.log("--restatring service--");
              this.activateSpeech();
          }
      },
      //completion
      () => {
          
          console.log("--complete--");
          this.activateSpeech();
      });
}

}
