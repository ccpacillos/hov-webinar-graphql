export interface Account {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
}

export const accounts: Account[] = [
  {
    id: 'baUMIICzCL_qPPpMG6FEC',
    firstname: 'Chris',
    lastname: 'Pacillos',
    email: 'christopher@hov.co',
  },
];

export interface Pet {
  id: string;
  name: string;
  kind: 'DOG' | 'CAT';
  parentId?: string;
}

export const pets: Pet[] = [
  {
    id: 'EZhNlyfS0cCYRTqb65q5f',
    name: 'Motmot',
    kind: 'CAT',
    parentId: 'baUMIICzCL_qPPpMG6FEC',
  },
  {
    id: 'TdJ7xBznygCisep7iCQiM',
    name: 'Jacob',
    kind: 'DOG',
  },
];
