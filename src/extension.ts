import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

  // Command to insert the address
  let insertAddress = vscode.commands.registerCommand('quickInsert.insertAddress', () => {
    insertInfo('quickInsert.address', 'No address set');
  });

  // Command to insert the email
  let insertEmail = vscode.commands.registerCommand('quickInsert.insertEmail', () => {
    insertInfo('quickInsert.email', 'No email set');
  });

  // Command to insert the phone number
  let insertPhone = vscode.commands.registerCommand('quickInsert.insertPhone', () => {
    insertInfo('quickInsert.phone', 'No phone number set');
  });

  // Command to insert social links
  let insertSocialLinks = vscode.commands.registerCommand('quickInsert.insertSocialLinks', () => {
    insertInfo('quickInsert.socialLinks', 'No social links set');
  });

  // Command to insert "About Me"
  let insertAboutMe = vscode.commands.registerCommand('quickInsert.insertAboutMe', () => {
    insertInfo('quickInsert.aboutMe', 'No about me information set');
  });

  // Command to insert mobile number
  let insertMobile = vscode.commands.registerCommand('quickInsert.insertMobile', () => {
    insertInfo('quickInsert.mobile', 'No mobile number set');
  });

  // Command to insert Instagram link
  let insertInstagram = vscode.commands.registerCommand('quickInsert.insertInstagram', () => {
    insertInfo('quickInsert.instagram', 'No Instagram link set');
  });

  // Command to insert Portfolio link
  let insertPortfolio = vscode.commands.registerCommand('quickInsert.insertPortfolio', () => {
    insertInfo('quickInsert.portfolio', 'No portfolio link set');
  });

  // Command to insert LinkedIn link
  let insertLinkedIn = vscode.commands.registerCommand('quickInsert.insertLinkedIn', () => {
    insertInfo('quickInsert.linkedin', 'No LinkedIn link set');
  });

  // Command to insert Twitter link
  let insertTwitter = vscode.commands.registerCommand('quickInsert.insertTwitter', () => {
    insertInfo('quickInsert.twitter', 'No Twitter link set');
  });

  // Command to insert GitHub link
  let insertGithub = vscode.commands.registerCommand('quickInsert.insertGithub', () => {
    insertInfo('quickInsert.github', 'No GitHub link set');
  });

  // Helper function to insert info
  const insertInfo = (configKey: string, defaultMessage: string) => {
    const editor = vscode.window.activeTextEditor;
    const info = vscode.workspace.getConfiguration().get<string>(configKey) || defaultMessage;
    if (editor) {
      editor.edit(editBuilder => {
        editBuilder.insert(editor.selection.active, info);
      });
    }
  };

  // Register all commands
  context.subscriptions.push(insertAddress);
  context.subscriptions.push(insertEmail);
  context.subscriptions.push(insertPhone);
  context.subscriptions.push(insertSocialLinks);
  context.subscriptions.push(insertAboutMe);
  context.subscriptions.push(insertMobile);
  context.subscriptions.push(insertInstagram);
  context.subscriptions.push(insertPortfolio);
  context.subscriptions.push(insertLinkedIn);
  context.subscriptions.push(insertTwitter);
  context.subscriptions.push(insertGithub);
}

export function deactivate() {}
