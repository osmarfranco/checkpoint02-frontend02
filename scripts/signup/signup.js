/* ---------- VARIABLES ---------- */
const FIRST_NAME = document.getElementById('firstName')
const LAST_NAME = document.getElementById('lastName')
const EMAIL = document.getElementById('email')
const PASSWORD = document.getElementById('password')
const REPEAT_PASSWORD = document.getElementById('repeatPassword')
const CREATE_ACC_BUTTON = document.getElementById('createAcc')

const FIRST_NAME_VALIDATION = document.getElementById('firstNameValidation')
const LAST_NAME_VALIDATION = document.getElementById('lastNameValidation')
const EMAIL_VALIDATION = document.getElementById('emailValidation')
const PASSWORD_VALIDATION = document.getElementById('passwordValidation')
const REPEAT_PASSWORD_VALIDATION = document.getElementById('repeatPasswordValidation')

const TOAST_SUCCESS = document.getElementById('toastSuccess')
const TOAST_FAIL = document.getElementById('toastFail')

let newUserObj = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
}

/* ---------- FUNCTIONS ---------- */
function createAccValidation(firstname, lastname, email, password, repeatPassword) {
  if (
    firstname &&
    lastname &&
    email &&
    password &&
    repeatPassword &&
    FIRST_NAME_VALIDATION.innerText === '' &&
    LAST_NAME_VALIDATION.innerText === '' &&
    EMAIL_VALIDATION.innerText === '' &&
    PASSWORD_VALIDATION.innerText === '' &&
    REPEAT_PASSWORD_VALIDATION.innerText === ''
  ) {
    //True
    CREATE_ACC_BUTTON.removeAttribute('disabled')
    CREATE_ACC_BUTTON.classList.remove('blocked-button')
    return true
  } else {
    //False
    CREATE_ACC_BUTTON.setAttribute('disabled', true)
    CREATE_ACC_BUTTON.classList.add('blocked-button')
    return false
  }
}

function signUpSuccess() {
  setTimeout(() => {
      location.href = "index.html"
  }, 1000);

  const toast = new bootstrap.Toast(TOAST_SUCCESS)
  toast.show()
}

function signUpError() {
  const toast = new bootstrap.Toast(TOAST_FAIL)
  toast.show() 
}

async function signUpApi(object) {
  let configRequest = {
      method:"POST",
      headers: {
          "Content-type": "Application/json"
      },
      body: object
    }

  try {
    let data = await fetch(ENDPOINT_USERS, configRequest)
    
    if(data.status == 201 || data.status == 200) {
        signUpSuccess()
    } else {
      throw data
    }
  } catch (error) {
    if (error.status == 400 || error.status == 404) {
      signUpError()  
    }
  }
}

/* ---------- EVENT LISTENERS ---------- */
FIRST_NAME.addEventListener('input', () => {
  if (FIRST_NAME.value) {
    FIRST_NAME_VALIDATION.innerText = ''
    FIRST_NAME.classList.remove('form-error')
  } else {
    FIRST_NAME_VALIDATION.innerText = 'Campo obrigatório'
    FIRST_NAME.classList.add('form-error')
  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

FIRST_NAME.addEventListener('blur', () => {
  if (FIRST_NAME.value) {
    FIRST_NAME_VALIDATION.innerText = ''
    FIRST_NAME.classList.remove('form-error')
  } else {
    FIRST_NAME_VALIDATION.innerText = 'Campo obrigatório'
    FIRST_NAME.classList.add('form-error')
  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

LAST_NAME.addEventListener('input', () => {
  if (LAST_NAME.value) {
    LAST_NAME_VALIDATION.innerText = ''
    LAST_NAME.classList.remove('form-error')
  } else {
    LAST_NAME_VALIDATION.innerText = 'Campo obrigatório'
    LAST_NAME.classList.add('form-error')
  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

LAST_NAME.addEventListener('blur', () => {
  if (LAST_NAME.value) {
    LAST_NAME_VALIDATION.innerText = ''
    LAST_NAME.classList.remove('form-error')
  } else {
    LAST_NAME_VALIDATION.innerText = 'Campo obrigatório'
    LAST_NAME.classList.add('form-error')
  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

EMAIL.addEventListener('input', () => {
  if (EMAIL.value.match(VALID_EMAIL_REQ)) {
    EMAIL_VALIDATION.innerText = ''
    EMAIL.classList.remove('form-error')
  } else if (EMAIL.value === '') {
    EMAIL_VALIDATION.innerText = 'Campo obrigatório'
    EMAIL.classList.add('form-error')
  } else {
    EMAIL_VALIDATION.innerText = 'Email inválido'
    EMAIL.classList.add('form-error')
  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

EMAIL.addEventListener('blur', () => {
  if (EMAIL.value.match(VALID_EMAIL_REQ)) {
    EMAIL_VALIDATION.innerText = ''
    EMAIL.classList.remove('form-error')
  } else if (EMAIL.value === '') {
    EMAIL_VALIDATION.innerText = 'Campo obrigatório'
    EMAIL.classList.add('form-error')
  } else {
    EMAIL_VALIDATION.innerText = 'Email inválido'
    EMAIL.classList.add('form-error')
  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

PASSWORD.addEventListener('input', () => {
  if (PASSWORD.value === REPEAT_PASSWORD.value || (PASSWORD.value && REPEAT_PASSWORD.value === '')) {
    PASSWORD_VALIDATION.innerText = ''
    PASSWORD.classList.remove('form-error')
    REPEAT_PASSWORD_VALIDATION.innerText = ''
    REPEAT_PASSWORD.classList.remove('form-error')
  } else if (PASSWORD.value === '') {
    PASSWORD_VALIDATION.innerText = 'Campo obrigatório'
    PASSWORD.classList.add('form-error')
  } else {
    REPEAT_PASSWORD_VALIDATION.innerText = 'As senhas devem ser iguais'
    REPEAT_PASSWORD.classList.add('form-error')
  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

PASSWORD.addEventListener('blur', () => {
// revisar aqui
//renato
  //regex para verificar a senha
  //let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
  //função que valida a senha
  //if (regex.test(PASSWORD.value)){
    //console.log('foi')
    
  if (PASSWORD.value === REPEAT_PASSWORD.value || (PASSWORD.value && REPEAT_PASSWORD.value === '')) {
    PASSWORD_VALIDATION.innerText = ''
    PASSWORD.classList.remove('form-error')
    REPEAT_PASSWORD_VALIDATION.innerText = ''
    REPEAT_PASSWORD.classList.remove('form-error')
  } else if (PASSWORD.value === '') {
    PASSWORD_VALIDATION.innerText = 'Campo obrigatório'
    PASSWORD.classList.add('form-error')
  } else {
    REPEAT_PASSWORD_VALIDATION.innerText = 'As senhas devem ser iguais'
    REPEAT_PASSWORD.classList.add('form-error')
    
    // revisar aqui
// renato
  //}}
  //erro caso a senha não ao pedido
  //else
  //{
    //PASSWORD_VALIDATION.innerText = 'As senhas devem conter 8 caracteres no mínimo, 1 Letra Maiúscula no mínimo, 1 Número no mínimo, 1 Símbolo no mínimo'
    //PASSWORD.classList.add('form-error')

  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

REPEAT_PASSWORD.addEventListener('input', () => {
  if (REPEAT_PASSWORD.value === PASSWORD.value) {
    REPEAT_PASSWORD_VALIDATION.innerText = ''
    REPEAT_PASSWORD.classList.remove('form-error')
  } else if (REPEAT_PASSWORD.value === '') {
    REPEAT_PASSWORD_VALIDATION.innerText = 'Campo obrigatório'
    REPEAT_PASSWORD.classList.add('form-error')
  } else {
    REPEAT_PASSWORD_VALIDATION.innerText = 'As senhas devem ser iguais'
    REPEAT_PASSWORD.classList.add('form-error')
  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

REPEAT_PASSWORD.addEventListener('blur', () => {
  if (REPEAT_PASSWORD.value === PASSWORD.value) {
    REPEAT_PASSWORD_VALIDATION.innerText = ''
    REPEAT_PASSWORD.classList.remove('form-error')
  } else if (REPEAT_PASSWORD.value === '') {
    REPEAT_PASSWORD_VALIDATION.innerText = 'Campo obrigatório'
    REPEAT_PASSWORD.classList.add('form-error')
  } else {
    REPEAT_PASSWORD_VALIDATION.innerText = 'As senhas devem ser iguais'
    REPEAT_PASSWORD.classList.add('form-error')
  }
  createAccValidation(
    FIRST_NAME.value,
    LAST_NAME.value,
    EMAIL.value,
    PASSWORD.value,
    REPEAT_PASSWORD.value
  )
})

CREATE_ACC_BUTTON.addEventListener('click', function (event) {
  if (
    createAccValidation(
      FIRST_NAME.value,
      LAST_NAME.value,
      EMAIL.value,
      PASSWORD.value,
      REPEAT_PASSWORD.value
    )
  ) {
    event.preventDefault()

    let firstName = normalizeTextRemoveSpaces(FIRST_NAME.value)
    let lastName = normalizeTextRemoveSpaces(LAST_NAME.value)
    let email = normalizeTextRemoveSpaces(EMAIL.value)
    let password = normalizeTextRemoveSpaces(PASSWORD.value)

    firstName = normalizeTextToLowerCase(firstName)
    lastName = normalizeTextToLowerCase(lastName)
    email = normalizeTextToLowerCase(email)

    newUserObj.firstName = firstName
    newUserObj.lastName = lastName
    newUserObj.email = email
    newUserObj.password = password

    let newUserObjInJson = JSON.stringify(newUserObj)

    signUpApi(newUserObjInJson)
  }
})
