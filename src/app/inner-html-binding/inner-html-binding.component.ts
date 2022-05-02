import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeScript } from '@angular/platform-browser';

@Component({
  selector: 'app-inner-html-binding',
  templateUrl: './inner-html-binding.component.html',
  styleUrls: ['./inner-html-binding.component.scss']
})
export class InnerHTMLBindingComponent implements OnInit {
  dangerous_script: string;
  attack_url: string;
  safe_script: SafeScript;
  safe_url:SafeUrl;
  constructor(private sanitizer: DomSanitizer) { 

    this.dangerous_script = 'Template <script>alert("alert aya hai")</script> <b>Syntax</b>';
    this.attack_url = 'alert("Hi this is an attack on you")'
    this.safe_script =this.sanitizer.bypassSecurityTrustScript(this.dangerous_script);
    this.safe_url =this.sanitizer.bypassSecurityTrustResourceUrl(this.attack_url)
  }

 

  ngOnInit(): void {
  }
}
