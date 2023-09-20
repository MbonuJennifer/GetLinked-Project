import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  ngOnInit(): void {
    // Set the target date for the countdown (September 23, 2023)
    const countDate = new Date('September 23, 2023 0:00:00').getTime();

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const now = new Date().getTime();
      const gap = countDate - now;

      if (gap <= 0) {
        // Submission closed when the target date has passed
        clearInterval(countdownInterval);
        const countdownElement = document.getElementById('countdown');
        const closedElement = document.getElementById('closed');
        if (countdownElement && closedElement) {
          countdownElement.style.display = 'none';
          closedElement.textContent = 'Submission closed';
        }
      } else {
        let second = 1000;
        let minute = second * 60;
        let hour = minute * 60;
        let day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        const countdownText = `${textDay}d ${
          textHour < 10 ? '0' : ''
        }${textHour}h ${textMinute < 10 ? '0' : ''}${textMinute}m ${
          textSecond < 10 ? '0' : ''
        }${textSecond}s`;
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
          countdownElement.textContent = countdownText;
        }
      }
    }

    // Initialize the countdown
    updateCountdown();
  }
}