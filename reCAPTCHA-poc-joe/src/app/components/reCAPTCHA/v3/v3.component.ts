import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-v3',
  templateUrl: './v3.component.html',
  styleUrls: ['./v3.component.css']
})
export class V3Component implements OnInit, OnDestroy {

  private singleExecutionSubscription: Subscription;
  constructor(
    private recaptchaV3Service: ReCaptchaV3Service,
    private http: HttpClient,
    ) { 

  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
  }
  public executeImportantAction(operate): void {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
    this.singleExecutionSubscription = this.recaptchaV3Service.execute(operate)
      .subscribe((token) => {
        console.log(token);
        this.http.post("http://localhost:8081/api/v3/recaptcha", {token: token}).subscribe(data =>{
          //according your response data determin the router distribution
          console.log(data);
          if(data['success'] && data['score'] > 0.6){
              alert("Login Success");
          }else{
              alert("Login Failed");
          }
        });
      });
  }

}
