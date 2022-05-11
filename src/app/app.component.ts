import { Component } from '@angular/core';
import drugs1 from '../assets/data/drugs1.json';
import drugs2 from '../assets/data/drugs2.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  public sendData: any;
  public formData: any;
  private drugs1: any = drugs1;
  private drugs2: any = drugs2;
  constructor(){}
  ngOnInit(){
   this.goForView('drug1.json');
  }

  goForView(fileName: string){
    if(fileName === 'drug1.json'){
      this.sendData = this.sortOrder(this.drugs1['fields']);
    }
    if(fileName === 'drug2.json'){
      this.sendData = this.sortOrder(this.drugs2['fields']);
    }
  }

  sortOrder(data: any){
   let sortData = Array.from(data).sort((obj1: any, obj2: any) => {
                    if (obj1.order > obj2.order) {
                        return 1;
                    }
                    if (obj1.order < obj2.order) {
                        return -1;
                    }
                    return 0;
                  });
    return sortData;
  }

  GetChildData(data: any){  
    console.log(data);  
 } 
}
