

class Negociacao {
    constructor(_data, _quantidade, _valor) {
        // Object.assign(this, {
        //     _data: new Date(data.getTime()),
        //     _quantidade: quantidade, _valor: valor,
        // }); Antes 

        Object.assign(this,{ _quantidade,_valor});
        this._data = new Date(_data.getTime());
        Object.freeze(this);

        // this._data = new Date(data.getTime());
        // this._quantidade = quantidade;
        // this._valor = valor;

    }
    get quantidade() {
        return this._quantidade;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get Valor() {
        return this._valor;
    }
    get Volume() {
        return this._quantidade * this._valor;
    }

}