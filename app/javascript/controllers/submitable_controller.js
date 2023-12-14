import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  submit(event) {
    this.element.requestSubmit()    
  }

  blur(){
    console.log("Blur")
    this.element.blur
  }

}
