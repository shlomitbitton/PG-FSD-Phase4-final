import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../service/file-upload.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File; // Variable to store file

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }
  
  onChange(event) {
    this.file = event.target.files[0];
}

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}
}
