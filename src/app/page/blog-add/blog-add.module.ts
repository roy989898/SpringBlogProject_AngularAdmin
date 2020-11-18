import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogAddComponent} from './blog-add.component';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from '../category-list/category.component';
import {EditorModule} from 'primeng/editor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {QuillModule} from 'ngx-quill';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

const appRoutes: Routes = [
  {path: '', component: BlogAddComponent},
  /*  {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent},
    {path: 'servers', component: ServersComponent}*/
];


// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [BlogAddComponent],
  imports: [
    RouterModule.forChild(appRoutes),
    CommonModule,
    EditorModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    QuillModule.forRoot(
      {
        modules: {

          toolbar: [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            [{header: 1}, {header: 2}],               // custom button values
            [{list: 'ordered'}, {list: 'bullet'}],
            [{script: 'sub'}, {script: 'super'}],      // superscript/subscript
            [{indent: '-1'}, {indent: '+1'}],          // outdent/indent
            [{direction: 'rtl'}],                         // text direction
            [{size: ['small', false, 'large', 'huge']}],  // custom dropdown
            [{header: [1, 2, 3, 4, 5, 6, false]}],
            [{color: []}, {background: []}],          // dropdown with defaults from theme
            [{font: []}],
            [{align: []}],
            ['clean']]
          // ['link', 'image','video']    ]
        }
      }
    )
  ]
})
export class BlogAddModule {
}
