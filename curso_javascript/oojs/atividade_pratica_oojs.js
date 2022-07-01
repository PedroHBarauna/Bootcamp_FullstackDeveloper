class contaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo=tipo;
        this.saldo=0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(val){
        this._saldo=val;
    }
    sacar(val){
        if(val>this._saldo) throw 'Não existe saldo suficiente para a operação';
        this._saldo-=val;
        return this._saldo;
    }
    depositar(val){
        this._saldo+=val;
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }
    sacar(val){
        if(val>this._saldo) throw 'Não existe saldo suficiente para a operação';
        if(val>500) throw 'Operação Negada';
        this._saldo-=val;
        return this._saldo;
    }

}