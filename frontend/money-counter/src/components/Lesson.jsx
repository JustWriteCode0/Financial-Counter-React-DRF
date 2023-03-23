import React, {useState} from 'react'


const Lesson = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password1: '',
        password2: ''
    });
    const { username, email, password1, password2 } = setForm;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }
    const clearForm = () => {
    }

    return (
        <div className='lesson-class'>
            <h1>h</h1>
            <form id="create-form" onSubmit={handleSubmit}>
                <input className="username" required value={username} onChange={(e) => setForm({...form, username: e.target.value})} />
                <input className="email" required value={email} onChange={(e) => setForm({...form, email: e.target.value})} />
                <input className="password1" required value={password1} onChange={(e) => setForm({...form, password1: e.target.value})}/>
                <input className="password2" required value={password2} onChange={(e) => setForm({...form, password2: e.target.value})}/>
                <button type="submit">Add</button>
                <button type="button" onClick={clearForm} className="btn btn-secondary">Reset</button>
            </form>
        </div>
    );
}
    

export default Lesson