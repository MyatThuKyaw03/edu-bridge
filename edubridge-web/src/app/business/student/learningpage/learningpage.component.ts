import { Component } from '@angular/core';

@Component({
  selector: 'app-learningpage',
  templateUrl: './learningpage.component.html',
  styleUrls: ['./learningpage.component.css'],
})
export class LearningpageComponent {
  info!: any;

  constructor(){

  }

  targetChapter = {
    no: 'Chapter 1',
    title: 'What is Java Programming',
    content: 'This is sample Content',
  };

  chapters: any = [
    {
      no: 'Chapter 1',
      title: 'What is Java Programming',
      content: 'This is sample Content',
    },
    {
      no: 'Chapter 2',
      title: 'What is Java OOP',
      content: 'This is sample OOP Content',
    },
    {
      no: 'Chapter 3',
      title: 'What is Java Programming',
      content: 'This is sample Content',
    },
    {
      no: 'Chapter 4',
      title: 'What is Java Programming',
      content: 'This is sample Content',
    },
  ];

  myFunction() {
    this.info = document.getElementById('myDIV');

    if (this.info.style.display === 'none') {
      this.info.style.display = 'block';
    } else {
      this.info.style.display = 'none';
    }
  }

  onSelectChapter(value: any) {
    this.targetChapter = value;
  }
}
