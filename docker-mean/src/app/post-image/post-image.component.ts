import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { AppServiceService } from '../app-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-image',
  templateUrl: './post-image.component.html',
  styleUrls: ['./post-image.component.css']
})
export class PostImageComponent implements OnInit {
  form: FormGroup;
  imagePreview: string;
  urls = [];
  constructor(private formBuilder: FormBuilder, private appService:AppServiceService,private router: Router) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      photos: this.formBuilder.array([],Validators.required)
    });
  }
  createItem(data): FormGroup {
    return this.formBuilder.group(data);
}
  get photos(): FormArray {
    return this.form.get('photos') as FormArray;
};
  
  onImagePicked(event) {
   
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        /* [to-Do] Check for image extension is jpeg,png,jpg */
        /***
         * 
         * 
         */

        //  Get URL and push to array
          let file =event.target.files[i];
          var reader = new FileReader();
          console.log(event.target.files[i].type);  
          reader.onload = (event: any) => {
            
           // this.urls.push(event.target.result);
           this.photos.push(this.createItem({
        
            url: event.target.result  //Base64 string for preview image
        }));
            
          }
  
          reader.readAsDataURL(event.target.files[i]);
        // }
        
      }
    }
  }

  removeImage(index){
    this.photos.removeAt(index);
  }
  onSaveImage(){
    if (this.form.invalid) {
      console.log("in invalid form");
      return;
    }else{
      console.log("form==>", this.form.value);
      this.appService.postImage(this.form.value).subscribe((res)=>{
        if(res){
          this.router.navigate(['/']);
        }
        
      });
    }
 this.form.reset();
  }
}
