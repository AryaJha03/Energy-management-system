import React from 'react'

export default function Plantregis() {
    return (
        <div className='d-flex align-items-center justify-content-center my-5 pt-3' style={{flexDirection:"column"}}>
            <h1 className='my-3'>Plant Registration Page</h1>
            <div  style={{ width: "50vw" }}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Plant ID</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Plant Name </label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Plant Type</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Renewable
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Non-Renewable
                            </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Capacity (MW)</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Location</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Commision Date</label>
                    <input type="date" className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Status</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label class="form-check-label" for="flexRadioDefault1">
                                Active
                            </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Inactive
                            </label>
                    </div>
                </div>
                <input class="btn btn-dark mx-2" type="submit" value="Submit" />
                <input class="btn btn-dark mx-2" type="reset" value="Reset"></input>
            </div>
        </div>
    )
}
