
let isVerified = true
let isLoggedIn = true
let hasPaymentToken =  true
let isGuest = true
if(isVerified && isLoggedIn && hasPaymentToken){
    console.log('greeting message to user')
    console.log('grant access to paid course')
}
else if(isVerified || isGuest){
    console.log('allow free previews')
    
}
else{
    console.log('message : please contact admin')
}