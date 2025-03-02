import * as assert from 'assert';
import * as vscode from 'vscode';


suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('AtCoder template insertion', async () => {
		const document = await vscode.workspace.openTextDocument({ content: '' });
		const editor = await vscode.window.showTextDocument(document);

		await vscode.commands.executeCommand('vs-competitive-starter.AtCoder');
		// すこし遅らせる
		await new Promise(resolve => setTimeout(resolve, 100));
		const text = editor.document.getText();
		assert.ok(text.includes('function MainAt'), 'AtCoder template insertion failed');
	});

	test('PaizaLearning template insertion', async () => {
		const document = await vscode.workspace.openTextDocument({ content: '' });
		const editor = await vscode.window.showTextDocument(document);

		await vscode.commands.executeCommand('vs-competitive-starter.PaizaLearning');
		// すこし遅らせる
		await new Promise(resolve => setTimeout(resolve, 100));
		const text = editor.document.getText();
		assert.ok(text.includes('const linesPl'), 'PaizaLearning template insertion failed');
	});
});
