let contentContainer = document.getElementsByClassName('content-container')[0]

const censoredWords = ['zoom', 'channel', 'galvanize', 'mcsp', 'garrett', 'ross', 'incompetent', 'unfunny']

const createForm = () => {

    let formContainer = document.createElement('div')
    formContainer.className = 'form-container'

    let form = document.createElement('form')
    form.addEventListener('submit', handleSubmit)
    form.className = 'post-form'

    let textInput = document.createElement('input')
    textInput.type = 'text'
    textInput.className = 'post-input'

    let submitButton = document.createElement('button')
    submitButton.type = 'submit'
    submitButton.className = 'submit-button'
    submitButton.innerText = 'Submit'

    form.appendChild(textInput)
    form.appendChild(submitButton)
    formContainer.appendChild(form)
    contentContainer.appendChild(formContainer)
}

const handleSubmit = (e) => {

    e.preventDefault()

    const message = document.querySelector('.post-input').value
    document.querySelector('.post-input').value = ''

    let filteredMessage = filter(message)
    createPost(filteredMessage)
}

const filter = (message) => {
    let censor = '-'
    return message.split(' ')
        .map((word) => censoredWords.includes(word.toLowerCase()) ? word[0] += censor.repeat(word.length - 1) : word)
        .join(' ')
}

const createPost = (filteredMessage) => {
    let post = document.createElement('div')
    post.className = 'post'

    let h3 = document.createElement('h3')
    h3.innerText = filteredMessage

    post.appendChild(h3)
    contentContainer.appendChild(post)
}

createForm()