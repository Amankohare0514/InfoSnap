import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  // Command to insert the address
  let insertAddress = vscode.commands.registerCommand('quickInsert.insertAddress', () => {
    const editor = vscode.window.activeTextEditor;
    const address = vscode.workspace.getConfiguration().get<string>('quickInsert.address') || 'No address set';
    if (editor) {
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, address);
      });
    }
  });

  // Command to insert the email
  let insertEmail = vscode.commands.registerCommand('quickInsert.insertEmail', () => {
    const editor = vscode.window.activeTextEditor;
    const email = vscode.workspace.getConfiguration().get<string>('quickInsert.email') || 'No email set';
    if (editor) {
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, email);
      });
    }
  });

  // Command to insert the phone number
  let insertPhone = vscode.commands.registerCommand('quickInsert.insertPhone', () => {
    const editor = vscode.window.activeTextEditor;
    const phone = vscode.workspace.getConfiguration().get<string>('quickInsert.phone') || 'No phone number set';
    if (editor) {
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, phone);
      });
    }
  });

  // Command to insert social links
  let insertSocialLinks = vscode.commands.registerCommand('quickInsert.insertSocialLinks', () => {
    const editor = vscode.window.activeTextEditor;
    const socialLinks = vscode.workspace.getConfiguration().get<string>('quickInsert.socialLinks') || 'No social links set';
    if (editor) {
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, socialLinks);
      });
    }
  });

  // Register all commands
  context.subscriptions.push(insertAddress);
  context.subscriptions.push(insertEmail);
  context.subscriptions.push(insertPhone);
  context.subscriptions.push(insertSocialLinks);
}

export function deactivate() {}
