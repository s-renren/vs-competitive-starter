import path from 'path';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "vs-competitive-starter" is now active!');

	const atCoder = vscode.commands.registerCommand('vs-competitive-starter.AtCoder', async () => {
		const editor = vscode.window.activeTextEditor;
		if(!editor) {
			vscode.window.showErrorMessage('No active text editor');
			return;
		}

		const fileNameDot = path.basename(editor.document.fileName, path.extname(editor.document.fileName));
		const fileName = fileNameDot.replace(/\W/g, "_");
		const template = `function MainAt${fileName}(input: string) {\n` +
		`  const result = input.split("\\n");\n` +
		`  // Write your code here\n` +
		`  console.log(result);\n` +
		`}\n` +
		`MainAt${fileName}(require("fs").readFileSync("/dev/stdin", "utf8"));`;

		await editor.edit((editBuilder => {
			editBuilder.insert(new vscode.Position(0, 0), template);
		}));

		vscode.window.showInformationMessage('Template code has been inserted');
	});

	const paizaLearning = vscode.commands.registerCommand('vs-competitive-starter.PaizaLearning', async () => {
		const editor = vscode.window.activeTextEditor;
		if(!editor) {
			vscode.window.showErrorMessage('No active text editor');
			return;
		}

		const fileNameDot = path.basename(editor.document.fileName, path.extname(editor.document.fileName));
		const fileName = fileNameDot.replace(/\W/g, "_");
		const template = `process.stdin.resume();\n` +
		`process.stdin.setEncoding("utf8");\n` +

		`const linesPl${fileName}: string[] = [];\n` +
		`const readerPl${fileName} = require("readline").createInterface({\n` +
		`  input: process.stdin,\n` +
		`  output: process.stdout,\n` +
		`});\n` +
		`readerPl${fileName}.on("line", (line: string) => {\n` +
		`  linesPl${fileName}.push(line);\n` +
		`});\n` +
		`readerPl${fileName}.on("close", () => {\n` +
		`  // Write your code here\n` +
		`  console.log(linesPl${fileName});\n` +
		`});`;

		await editor.edit((editBuilder => {
			editBuilder.insert(new vscode.Position(0, 0), template);
		}));

		vscode.window.showInformationMessage('Template code has been inserted');
	});

	context.subscriptions.push(atCoder);
	context.subscriptions.push(paizaLearning);
}

export function deactivate() {}
