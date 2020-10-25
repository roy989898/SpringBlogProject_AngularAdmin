import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  constructor() {
  }

  private base64Head = 'data:image/jpeg;base64,';

  getBase64(event): Promise<string> {
    return new Promise((resolve, reject) => {
      const me = this;
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // me.modelvalue = reader.result;
        // console.log(reader.result);

        // data:image/jpeg;base64,
        let result = reader.result as string;
        result = result.replace(this.base64Head, '');
        // console.log(reader.result);
        // @ts-ignore
        resolve(result);
      };
      reader.onerror = error => {
        // console.log('Error: ', error);
        reject(error);
      };
    });


  }
}
