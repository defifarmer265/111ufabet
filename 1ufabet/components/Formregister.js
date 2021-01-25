import { gql, useMutation, useQuery } from '@apollo/client';
import { useEffect,useState } from 'react';
import Swal from 'sweetalert2';

// function changeData(){
//     const [value, setValue] = useState('');
    
//     const onChange2 = Event => setQuery(Event.target.value);
// }
    
const ADD_TODO = gql`
mutation AddTodo($data:RegisterCreateInput!){
    createOneRegister(
        data:$data
    ){
        id
    }
}
`;

// export function registerform(props){
//     const [name, setPhone ] = useState("");

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         alert(`submitting Name ${phone}`)
//     }
// }
// function RegisterFrom(){
//     e.preventDefault();
//     console.log(form.phone, form.firstName);
// }
// const updateField = e => {
//     setValues({
//         ...form,
//         [e.target.phone]: e.target.value
//     });
// };
const Formregister = () => {

  const [valuePhone,setValuePhone] = useState('');
  const [valueFirstname,setValueFirstname] = useState('');
  const [valueLastname,setValueLastname] = useState('');
  const [valueBank,setValueBank] = useState('');
  const [valueBankAcc,setValueBankAcc] = useState('');
  const [valuePassword,setValuePassword] = useState('');
  const [valueLineId,setValueLineId] = useState('');
  const [valueBonus,setValueBonus] = useState('');
  const [addTodo, { data }] = useMutation(ADD_TODO);

//   useEffect(()=>{
//     addTodo()
//     console.log(data)
//   },[])
    return(
    <div className="overlay-display">
        <form className="pure-u-1 t-center registration-form display-form" id="text" method="post" action="/https://ufa777b.automebet.com/ufa777b/ufabet/register"
        onSubmit={e=> {
            e.preventDefault();
            addTodo({
                variables: {
                    data:{
                        phone:(valuePhone),
                        firstName:(valueFirstname),
                        lastName:(valueLastname),
                        lineId:(valueLineId),
                        password:(valuePassword),
                        Bonus: {
                            create: {
                                accept_condition:(valueBonus)
                            }
                        },
                        BankAccount: {
                            create: {
                                bankName:(valueBank),
                                number:(valueBankAcc),
                                Bank:{
                                    connect:{
                                        id:1
                                    }
                                }
                            }
                        }
                    }
                }
            }).then((data)=>{
                Swal.fire({
                    icon: 'success',
                    title:'สมัครสมาชิกเรียบร้อย'
                })
            }).catch((err)=>{
                console.log(err);   
                Swal.fire({
                    icon:'error',
                    title: 'มี '+String(err).split('(`')[1].split('`)')[0]+' ในระบบแล้ว'
                })
            });
        }}
        >
            <fieldset className="pure-g form-bottom border-register p-relative">
                <span className="close-register">×</span>
                <div className="pure-u-1 margin-top-1"><h2>สมัครสมาชิก</h2></div>
                {/* <div class="x-step-register">
                    <div class="d-block">
                        <div class="p-center-02">
                            <div class="p-center-03">
                                <div class="-step-box-outer m-auto step-active">
                                    <div class="--step-box-inner text-center f-9">
                                        1
                                    </div>
                                </div>
                            </div>
                            <div class="-border">
                                <hr />
                            </div>
                            <div class="p-center-03">
                                <div class="-step-box-outer m-auto ">
                                    <div class="--step-box-inner text-center f-9">
                                        2
                                    </div>
                                </div>
                            </div>
                            <div class="-border">
                                <hr />
                            </div>
                            <div class="p-center-03">
                                <div class="-step-box-outer m-auto ">
                                    <div class="--step-box-inner text-center f-9">
                                        3
                                    </div>
                                </div>
                            </div>
                            <div class="-border">
                                <hr />
                            </div>
                            <div class="p-center-03">
                                <div class="-step-box-outer m-auto ">
                                    <div class="--step-box-inner text-center f-9">
                                        4
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            {/* <div className="container2">
                <div className="progress-bar d-flex">
                    <div className="step">
                        <div className="bullet">
                            <span>1</span>
                        </div>
                    </div>
                    <div className="step">
                        <div className="bullet">
                            <span>2</span>
                        </div>
                    </div>
                    <div className="step">
                        <div className="bullet">
                            <span>3</span>
                        </div>
                    </div>
                    <div className="step">
                        <div className="bullet">
                            <span>4</span>
                        </div>
                    </div>
                </div>
            </div> */}
                <div className="pure-u-1 padding-bottom-1"><img src="assets/images/shared/ic_register.png" alt="" width="90px;"/></div>
                <div className="pure-g p-relative">
                    <div className="pure-u-19-24 p-center padding-bottom-1">
                        <div className="pure-g input-register">
                            <img src="assets/images/shared/ic_phone.png" className="ic-phone-register" alt="" />
                            <input type="text"
                                    value={valuePhone}
                                    onChange={ (event) => setValuePhone(event.target.value) }
                                    placeholder="กรุณากรอกเบอร์โทรศัพท์" 
                                    name="phone"
                                    maxLength="10" 
                                    id="phone-input phoneNumberString tbNumbers"
                                    className="pure-u-1 phoneid numbers" autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="pure-u-1">
                        <div>
                            <input type="checkbox"/>
                            <label> ยอมรับเงื่อนไข <a className="text-yellow">Term and condition</a></label>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1">
                    <input type="button" name="next-step-1" value="ยืนยัน" className="btn-next pointer btn-register-2 margin-top-down-1"/>
                </div>
                <div className="pure-u-1 padding-bottom-1">
                    <div>
                        <label>พบปัญหา <a className="text-yellow">ติดต่อฝ่ายบริการลูกค้า</a></label>
                    </div>
                </div>
            </fieldset>
            <fieldset className="pure-g form-bottom border-register p-relative">
                <span className="close-register">×</span>
                <div className="pure-u-1 margin-top-1"><h2>สมัครสมาชิก</h2></div>
                <div className="pure-u-1"><img src="assets/images/shared/ic_register.png" alt="" width="100px;"/></div>
                <div className="pure-u-1 fs-subtitle margin-bottom-1"><h3>กรุณากรอกชื่อ-นามสกุล</h3></div>
                <div className="pure-u-19-24 p-center">
                    <div className="pure-g input-register">
                        {/* <img src="assets/images/shared/ic_phone.png" className="ic-phone-register" alt="" /> */}
                        <input type="text"
                                value={valueFirstname}
                                onChange={ (event) => setValueFirstname(event.target.value)}
                                name="firstName"
                                placeholder="กรอกชื่อ"
                                className="pure-u-1"
                                autoComplete="off"
                        />
                    </div>

                </div>
                <div className="pure-u-19-24 p-center padding-bottom-1">
                    <div className="pure-g input-register">
                        {/* <img src="assets/images/shared/ic_phone.png" className="ic-phone-register" alt="" /> */}
                        <input type="text"
                                value={valueLastname}
                                onChange={ (event) => setValueLastname(event.target.value)}
                                name="lastName"
                                placeholder="กรอกนามสกุล"
                                className="pure-u-1"
                                autoComplete="off"
                        />
                    </div>
                </div>
                <div className="pure-u-1">
                    {/* <input type="button" name="previous" value="Previous" className="btn-previous pointer btn-register-2  margin-top-down-1"/> */}
                    <input type="button" name="ยืนยัน" value="ยืนยัน" className="btn-next pointer btn-register-2 margin-top-down-1"/>
                </div>
            </fieldset>
            <fieldset className="pure-g form-bottom border-register p-relative">
                <span className="close-register">×</span>
                <div className="pure-u-1 margin-top-1"><h2>สมัครสมาชิก</h2></div>
                <div className="pure-u-1"><img src="assets/images/shared/ic_register.png" alt="" width="100px;"/></div>
                <div className="pure-u-1 margin-bottom-1"><h3>กรุณาเลือกบัญชีธนาคาร</h3></div>
                <div className="pure-u-1">
                    <div className="pure-g" id="bank">
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/bbl.png" className="width-70 pure-u-1" />
                            <input type="radio" 
                                    name="radio" 
                                    value="bbl" 
                                    className="pure-u-1"
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/baac.png" className="width-70 pure-u-1" />
                            <input type="radio" 
                                    name="radio" 
                                    value="baac" 
                                    className="pure-u-1"
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/ghbank.png" className="width-70 pure-u-1" />
                            <input type="radio" 
                                    name="radio" 
                                    value="ghbank"
                                    className="pure-u-1" 
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/gsb.png" className="width-70 pure-u-1" />
                            <input type="radio" 
                                    name="radio" 
                                    value="gsb" 
                                    className="pure-u-1" 
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/kbank.png" className="width-70 pure-u-1" />
                            <input type="radio" 
                                    name="radio" 
                                    value="kbank" 
                                    className="pure-u-1" 
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/kkp.png" className="width-70 pure-u-1" />
                            <input type="radio" 
                                    name="radio" 
                                    value="kkp" 
                                    className="pure-u-1" 
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/krungsri.png" className="width-70 pure-u-1" />
                            <input type="radio"
                                    name="radio" 
                                    value="krungsri" 
                                    className="pure-u-1" 
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/ktb.png" className="width-70 pure-u-1" />
                            <input type="radio"
                                    name="radio" 
                                    value="ktb" 
                                    className="pure-u-1" 
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/lh.png" className="width-70 pure-u-1" />
                            <input type="radio"
                                    name="radio" 
                                    value="lh" 
                                    className="pure-u-1" 
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/scb.png" className="width-70 pure-u-1" />
                            <input type="radio" 
                                    name="radio" 
                                    value="scb" 
                                    className="pure-u-1"
                                    onChange={ (event) => setValueBank(event.target.value)} 
                            />        
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/tmb.png" className="width-70 pure-u-1" />
                            <input type="radio" 
                                    name="radio"
                                    value="tmb" 
                                    className="pure-u-1" 
                                    onChange={ (event) => setValueBank(event.target.value)} 
                            />
                        </label>
                        <label className="pure-u-1-5">
                            <img src="assets/images/bank/tns.png" className="width-70 pure-u-1" />
                            <input type="radio" 
                                    name="radio" 
                                    value="tns"
                                    className="pure-u-1" 
                                    onChange={ (event) => setValueBank(event.target.value)}
                            />
                        </label>
                    </div>
                    <div className="pure-g">
                        <div className="pure-u-19-24 p-center padding-bottom-1">
                            <div className="pure-g input-register">
                                <input type="text"
                                        value={valueBankAcc}
                                        onChange={ (event) => setValueBankAcc(event.target.value)}
                                        name="acc_bank"
                                        placeholder="เลขที่บัญชี"
                                        className="pure-u-1 margin-top-down-1"
                                        autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pure-u-1">
                    {/* <input type="button" name="previous" value="Previous" className="btn-previous pointer btn-register-2"/> */}
                    <input type="button" name="ยืนยัน" value="ยืนยัน" className="btn-next pointer btn-register-2"/>
                </div>
            </fieldset>
            <fieldset className="pure-g form-bottom border-register p-relative">
                <span className="close-register">×</span>
                <div className="pure-u-1 margin-top-1"><h2>สมัครสมาชิก</h2></div>
                <div className="pure-u-1"><img src="assets/images/shared/ic_register.png" alt="" width="100px;"/></div>
                <div className="pure-u-1 margin-bottom-1"><h3>กรุณากรอกพาสเวิร์ดสำหรับเข้าใช้งาน</h3></div>
                <div className="pure-u-1">
                    <div className="pure-g input-register">
                        <input type="password"
                                value={valuePassword}
                                onChange={ (event) => setValuePassword(event.target.value)}
                                name="password"
                                placeholder="กรอกกพาสเวิร์ด"
                                className="pure-u-19-24 p-center padding-bottom-1"
                                autoComplete="off"
                                id="password1"
                        />
                        <input type="password"
                                name="re-password"
                                placeholder="กรอกกพาสเวิร์ดอีกครั้ง"
                                className="pure-u-19-24 p-center padding-bottom-1"
                                id="password2"
                        />
                    </div>
                </div>
                <div className="pure-u-1">
                    {/* <input type="button" name="previous" value="Previous" className="btn-previous pointer btn-register-2 margin-top-down-1"/> */}
                    <input type="button" name="ยืนยัน" value="ยืนยัน" className="btn-next pointer btn-register-2 margin-top-down-1"/>
                </div>
            </fieldset>
            <fieldset className="pure-g form-bottom border-register p-relative">
                <span className="close-register">×</span>
                <div className="pure-u-1 margin-top-1"><h2>สมัครสมาชิก</h2></div>
                <div className="pure-u-1"><img src="assets/images/shared/ic_register.png" alt="" width="100px;"/></div>
                <div className="pure-u-1 fs-subtitle margin-bottom-1"><h3>กรุณากรอกไอดีไลน์ และเลือกรับโปรโมชั่น</h3></div>
                <div className="pure-u-1">
                    <div className="pure-g input-register">
                        <input type="text"
                                value={valueLineId}
                                onChange={ (event) => setValueLineId(event.target.value)}
                                name="lineId"
                                placeholder="ไลน์ไอดี"
                                className="pure-u-19-24 p-center padding-bottom-1"
                                autoComplete="off"
                        />
                    </div>
                </div>
                <div className="pure-u-1">
                    <div className="pure-g input-register radio-register">
                        <input type="radio"
                                value="รับโปรโมชั่น"
                                className="pure-u-1-5"
                                onChange={ (event) => setValueBonus(event.target.value)}
                                disabled/>
                        <label className="pure-u-4-5 t-left">รับโปรโมชั่น</label>
                        <input type="radio"
                                value ="ไม่รับโปรโมชั่น"
                                className="pure-u-1-5"
                                onChange={ (event) => setValueBonus(event.target.value)}
                                />
                        <label className="pure-u-4-5 t-left">ไม่รับโปรโมชั่น</label>
                    </div>
                </div>
                <div className="pure-u-1">
                    {/* <input type="button" name="previous" value="Previous" className="btn-previous pointer btn-register-2"/> */}
                    <input type="submit" name="submit" value="submit" className="submit pointer btn-register-2 margin-left-2"/>
                </div>
            </fieldset>
        </form>
    </div>
    )
}
export default Formregister