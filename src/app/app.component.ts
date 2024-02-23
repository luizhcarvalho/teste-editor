import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Noticia } from './shared/noticia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teste-editor';
  
  form!: FormGroup;
  noticia: Noticia = {
    titulo: 'Como verificar a saúde de um SSD no Windows 10 ou Windows 11',
    corpo: '<p><img src=\"https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=1200&amp;height=750&amp;format=.jpg&amp;quality=91&amp;imagick=uploads.adrenaline.com.br/2024/02/saude-do-ssd.jpg\" alt=\"Integridade e saúde do ssd\"></p><p><br></p><p>Quem tem um SSD pode ainda não saber, mas eles possuem tempo de vida, sendo extremamente importante ficar atento a sua integridade (saúde). Um SSD com problema pode gerar a perda dos dados.</p><p><br></p><p>Nesse rápido artigo mostro uma forma do próprio Windows informar sobre a saúde do seu SSD, e também de um aplicativo gratuito que passa uma série de informações a respeito do seu SSD, incluindo a marca, modelo e suas especificações.</p><p><br></p><h2><strong>Verificando a integridade do SSD</strong></h2><p><br></p><p>Por dentro do Windows 10 ou Windows 11 é possível ver de forma rápida como está a integridade do SSD através de comandos no app “prompt de comando” do Windows.</p><p><br></p><ol><li>Clique na barra de pesquisa do Windows.</li><li>Digite “CMD” e pressione enter, que o app Prompt de comandos vai abrir.</li><li>Digite “WMIC” e pressione enter.</li><li>Digite “diskdrive get status” e pressione enter.</li></ol><p><br></p><p>Se aparecer a informação “OK” quer dizer que seu SSD está funcionando dentro do normal.</p><p><br></p><p class=\"ql-align-center\"><img src=\"https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?format=.png&amp;quality=91&amp;imagick=uploads.adrenaline.com.br/2024/02/cmd-ssd-saude.png\"></p><p><br></p>'
  };
  
  ngOnInit(): void {
    this.createForm(this.noticia);
  }

  createForm(noticia: Noticia) {
    this.form = new FormGroup({
      titulo: new FormControl(noticia.titulo),
      corpo: new FormControl(noticia.corpo)
    });
  }

  // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  quillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],               // headers 1 até 6 e normal
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['link', 'image', 'video'],                         // link and image, video
      ['clean']                                         // remove formatting button
    ],
  };
}
