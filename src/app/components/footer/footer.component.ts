import {Component} from "@angular/core";


@Component({
  selector: 'app-footer',
  template: `
    <div style="
position:absolute;
margin-bottom:1px;
width:100%;
text-align: center;"
    >
      <h4>SC SCATIUL SRL</h4>
      <h4>+40 744 444 44444</h4>
      <h4>Adress: Strada Luncavat nr 21, Oras Babeni, VL</h4>
    </div>
  `,
  standalone: true
})

export class FooterComponent{

}

