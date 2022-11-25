import { Component } from '@angular/core';
import { Clinic } from 'src/app/interfaces/Clinic';
import { ClinicService } from 'src/app/services/clinicService/clinic.service';
@Component({
  selector: 'app-modal-clinic',
  templateUrl: './modal-clinic.component.html',
  styleUrls: ['./modal-clinic.component.css'],
})
export class ModalClinicComponent {
  data: Clinic = {
    id: 0,
    nome: '',
    cnpj: '',
    especialidade: '',
    telefone: '',
    cep: '',
    endereço: '',
    numero: '',
    bairro: '',
    estado: '',
    status: '',
    preço: 0,
    atendimento: {
      inicio: '',
      fim: '',
    },
  };
  constructor(private clinicService: ClinicService) {}
  addNewClinic(): void {
    console.log(this.data);
    if (
      this.data.nome &&
      this.data.cnpj &&
      this.data.telefone &&
      this.data.cep &&
      this.data.endereço &&
      this.data.numero &&
      this.data.bairro &&
      this.data.estado &&
      this.data.status &&
      this.data.preço &&
      this.data.atendimento.inicio &&
      this.data.atendimento.fim
    ) {
      this.clinicService.insert(this.data).subscribe();
    }
  }
}
