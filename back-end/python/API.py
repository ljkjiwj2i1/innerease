from flask import Flask, request, jsonify
from operacoes_banco import *
from flask_cors import CORS

app = Flask (__name__)
CORS(app)

@app.route("/registro", methods=["GET"])
def obter_registro():
    registros = obterRegistro()
    return jsonify(registros)

@app.route("/registro", methods=["POST"])
def inserir_registro():
    registros = request.json
    insereRegistro(registros)
    return jsonify({"mensagem": "Registro inserido com sucesso!"})

@app.route("/registro/<int:id>", methods=["PUT"])
def atualiza_registro(id):
    registro = request.json
    atualizaRegistro(registro,id)
    return jsonify({"mensagem": "Registro atualizado com sucesso!"})

@app.route("/registro/<int:id>", methods=["DELETE"])
def deleta_registro(id):
    deletaRegistro(id)
    return jsonify({"mensagem": "Registro deletado com sucesso!"})

app.run()