import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public postService: PostService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }


  get f() { return this.form.controls; }

  submit(): void {
    this.submitted = true;
    if (this.form.valid) {
      this.postService.createpost(this.form.value).subscribe(
        (response) => {
          console.log('Publication crée avec succès !', response);
          this.router.navigate(['/post/index']);
        },
        (error) => {
          console.error('Erreur de création de publication', error);
        }
      );
    }
  }
}

