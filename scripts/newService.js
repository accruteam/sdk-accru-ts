const fs = require('fs');
// const inquirer = require('inquirer');

const state = {
  model: '',
  serviceName: '',
  directory: '',
  serviceFileContent: '',
  indexFileContent: '',
  typesFileContent: '',
  queriesFileContent: '',
};

const setQuestions = () => [
  {
    name: 'serviceName',
    type: 'text',
    message: 'View Name?',
  },
];

function setDirectoryName(name = 'hey') {
  state.model = name[0].toUpperCase() + name.substring(1);
  state.serviceName = name.toLowerCase();
  state.directory = `${__dirname}/../src/services/${name.toLowerCase()}`;
}

function createDirectory() {
  fs.mkdirSync(state.directory);
}

function checkIfDirectoryExists() {
  return !!fs.existsSync(state.directory);
}

function setIndexFileContent() {
  state.indexFileContent = `import ${state.serviceName} from './${state.serviceName}.service';

export default ${state.serviceName};
  `;
}

function setServiceFileContent() {
  state.serviceFileContent = `import { ApolloClient } from '@apollo/client';

export default class ${state.model} {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public getOne = async (): Promise<any> => {}
  public create = async (): Promise<any> => {}
  public update = async (): Promise<any> => {}
  public del = async (): Promise<any> => {}
}
  `;
}

function setQueriesFileContent() {
  state.queriesFileContent = `import { gql } from '@gql';`;
}

function setTypesFileContent() {
  state.typesFileContent = `import { StandardQueryOptions } from '../types';
export interface ${state.model}GetVariables extends StandardQueryOptions {}
export interface ${state.model}GetResponse {}

export interface ${state.model}GetOneVariables {}
export interface ${state.model}GetOneResponse {}

export interface ${state.model}CreateVariables {}
export type ${state.model}CreateResponse = Object;

export interface ${state.model}UpdateVariables {}
export type ${state.model}UpdateResponse = Object;`;
}

function createIndexFile() {
  fs.writeFileSync(`${state.directory}/index.ts`, state.indexFileContent);
}
function createServiceFile() {
  fs.writeFileSync(
    `${state.directory}/${state.serviceName}.service.ts`,
    state.serviceFileContent,
  );
}
function createQueriesFile() {
  fs.writeFileSync(
    `${state.directory}/${state.serviceName}.queries.ts`,
    state.queriesFileContent,
  );
}
function createTypesFile() {
  fs.writeFileSync(
    `${state.directory}/${state.serviceName}.types.ts`,
    state.typesFileContent,
  );
}

const init = async () => {
  const questions = setQuestions();
  const responses = await inquirer.prompt(questions);

  setDirectoryName(responses.serviceName);
  setDirectoryName('auth');

  if (checkIfDirectoryExists()) {
    throw new Error('Aborting Directory already exists.');
  }

  setIndexFileContent();
  setServiceFileContent();
  setQueriesFileContent();
  setTypesFileContent();

  createDirectory();

  createIndexFile();
  createServiceFile();
  createQueriesFile();
  createTypesFile();
};

init();
