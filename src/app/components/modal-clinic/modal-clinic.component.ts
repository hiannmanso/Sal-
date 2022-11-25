import { ThisReceiver } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Clinic } from 'src/app/interfaces/Clinic';
import { ClinicService } from 'src/app/services/clinicService/clinic.service';
@Component({
  selector: 'app-modal-clinic',
  templateUrl: './modal-clinic.component.html',
  styleUrls: ['./modal-clinic.component.css'],
})
export class ModalClinicComponent {
  closetag = '/assets/close-circle-outline.svg';

  @Input() data!: Clinic;
  @Input() modal!: boolean;
  @Input() isUpdate!: boolean;
  constructor(private clinicService: ClinicService) {
    console.log(this.data, this.isUpdate);
  }
  async addNewClinic() {
    if (
      this.data.nome === '' ||
      this.data.cnpj === '' ||
      this.data.telefone === '' ||
      this.data.cep === '' ||
      this.data.endereço === '' ||
      this.data.numero === '' ||
      this.data.bairro === '' ||
      this.data.estado === '' ||
      this.data.status === '' ||
      this.data.preço === 0 ||
      this.data.atendimento.inicio === '' ||
      this.data.atendimento.fim === ''
    ) {
      alert('Voce precisa cadastrar todos os dados!');
    }
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
      this.data.atendimento.fim &&
      !this.isUpdate
    ) {
      this.clinicService.insert(this.data).subscribe();
      this.setModal();
      this.clinicService.getAll();
    }
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
      this.data.atendimento.fim &&
      this.isUpdate
    ) {
      await this.clinicService.update(this.data).subscribe();

      this.isUpdate = false;
      this.setModal();
      console.log('TAUPDATANDOAINDA?', this.isUpdate);
    }
  }
  setModal() {
    this.modal = false;
    this.isUpdate = false;
    this.data = {
      id: 0,
      nome: '',
      cnpj: '',
      especialidade: '',
      telefone: '',
      cep: '',
      endereço: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      status: '',
      preço: 0,
      atendimento: {
        inicio: '',
        fim: '',
      },
    };
  }
}
