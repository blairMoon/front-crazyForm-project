import { makeVar } from '@apollo/client';

/*
apollo => reactive-variables 
- npm i @apollo/client
*/

export const isLoggedInVar = makeVar(false);
