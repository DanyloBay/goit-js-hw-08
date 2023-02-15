import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('form'),
  emailEl: document.querySelector('input'),
  nameEl: document.querySelector('textarea'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.formEl.addEventListener(
  'input',
  throttle(() => {
    const storageValue = { email: refs.emailEl.value, name: refs.nameEl.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storageValue));
  }, 500)
);

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  refs.formEl.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
  try {
    const storageState = localStorage.getItem(key);
    return storageState === null ? undefined : JSON.parse(storageState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageFields = load(LOCALSTORAGE_KEY);
if (storageFields) {
  refs.emailEl.value = storageFields.email;
  refs.nameEl.value = storageFields.name;
}
