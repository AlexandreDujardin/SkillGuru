import { login, signup } from './actions'

import React from "react";
import {Input} from "@nextui-org/react";

export default function LoginPage() {

  return (
    <form class="max-w-sm mx-auto">
      <div class="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="email" id="email" name="email" label="Email" isRequired/>
      </div>
      <div class="mb-5">
        <Input type="password" id="password" name="password" variant="faded" label="Mot de passe" isRequired/>
      </div>
      <div class="flex items-start mb-5">
        <button formAction={login} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Se connecter</button>
        <button formAction={signup} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">S'incrire</button>
      </div>
    </form>
  )
}
