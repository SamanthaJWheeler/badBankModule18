function Login(){
  const [show, setShow]                = React.useState(true);
  const [status, setStatus]            = React.useState('');
  const [name, setName]                = React.useState('');
  const [email, setEmail]              = React.useState('');
  const [password, setPassword]        = React.useState('');
  const [currentUser, setCurrentUser]  = React.useState(null);
  const [verify, setVerify]            = React.useState(true);
  const ctx = React.useContext(UserContext);  

// const foundaEmail = ctx.users[0].email
// console.log('found an email!', foundaEmail)


//const getUser = (userEmail) => {
//  return ctx.users.find((user) => user.email === userEmail)}

function validate(field, label){
    if(label === 'email'){
      const verifyEmail = getUser(field)
      if (!field && verifyEmail) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    } else {
      if (!field && !userEmail) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    }
    
    return true;
}

function handleLogin(){
  console.log(name,email,password); 

  if (!validate(email,    'email'))    return;
  if (!validate(password, 'password')) return;

  setShow(false);
}
  
  return (
    <Card
      bgcolor="primary"
      header="Log In"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleLogin}>Log In</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <div className="alert alert-primary" role="alert">
                Welcome Back!
              </div>
              </>
            )}
    />
  )  
}
