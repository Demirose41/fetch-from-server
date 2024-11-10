export function getAllDogs() {
    return fetch("/dogs")
}

export function getDogNumberTwo() {
    return fetch("/dogs/2")
}

export function postNewDog() {
    return fetch("/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=fido&age=21"
    })
}

export function postNewDogV2(name, age) {
    return fetch("/dogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({name: name, age: age}).toString()
    })
}

export function deleteDog(id) {
      return fetch(`/dogs/${id}/delete`, {
        method: "POST",
        headers: {
            "AUTH": 'ckyut5wau0000jyv5bsrud90y'
        }
      })
}