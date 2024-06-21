import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages:string[]=[
    'Good morning!',
    'Have a fantastic day!',
    'Keep smiling!',
    'Believe in yourself!',
    'You are amazing!',
    'Enjoy your day!'

  ]

  getRandomMessage():string{
    return this.messages[Math.floor(Math.random()* this.messages.length)]
  }
  
}
