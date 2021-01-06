function Content()
{
    return(
        <div className="content" id="content">
             <nav class="navbar navbar-expand-lg navbar2">
                <div class="container-fluid">

                    {/* <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fa fa-align-left"></i>                    
                    </button> */}
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                Welcome, Surya.
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        <div id="form">

                <div class="form-heading">
                    House Details
                </div>
                
            <div class="formBody">
                <div class="formcontent1">
                    <h6>&nbsp;HOUSE DETAILS&nbsp;</h6>
                    <div class="formcontent1-body">
                        <div class="row">
                            <div class="col-sm-1">
                                <label>House No&nbsp;<span title="This field is required" >*</span></label>
                                <input type="number" class="form-control" name="house_no" placeholder="House No"  />
                            </div>
                            <div class="col-sm-2">
                                <label>Street Name&nbsp;<span title="This field is required" >*</span></label>
                                <input type="text" class="form-control" name="street_name" placeholder="Street Name"  />
                            </div>
                            <div class="col-sm-2">
                                <label>City</label>
                                <input type="text" class="form-control" name="city" placeholder="City"  />
                            </div>
                            <div class="col-sm-2">
                            <label>State</label>
                                <input type="text" class="form-control" name="state" placeholder="State"  />
                            </div>
                            <div class="col-sm-2">
                            <label>Country</label>
                            <select name="country" class="form-control">
                                    <option>India</option>
                                    <option>USA</option>
                            </select>
                            </div>
                            <div class="col-sm-2">
                                <label>Zip Code&nbsp;<span title="This field is required" >*</span></label>
                                <input type="number" class="form-control" name="zip_code" placeholder="Zip Code"  />
                            </div>
                            <div class="col-sm-1">
                                <label>Primary House?&nbsp;<span title="This field is required" >*</span></label>
                                <select name="primary_house" class="form-control">
                                <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-sm-1">
                                <label>Built Year</label>
                                <input type="number" class="form-control" name="built" placeholder="Built Year"  />
                            </div>
                            <div class="col-sm-2">
                                <label>Survey Number</label>
                                <input type="number" class="form-control" name="survey" placeholder="Survey Number"  />
                            </div>
                            <div class="col-sm-2">
                                <label>Purchase Amount</label>
                                <input type="number" class="form-control" name="purchase_amount" placeholder="Purchase Amount"  />
                            </div>
                            <div class="col-sm-2">
                            <label>Purchase Date&nbsp;<span title="This field is required" >*</span></label>
                                <input type="date" class="form-control" name="purchase_date" placeholder="Purchase Date"  />
                            </div>
                            <div class="col-sm-2">
                            <label>Builder Name</label>
                            <input type="text" class="form-control" name="builder_name" placeholder="Builder Name"  />

                            </div>
                            <div class="col-sm-2">
                                <label>Subdivision Name</label>
                                <input type="text" class="form-control" name="subdiv_name" placeholder="Subdivision Name"  />
                            </div>
                            <div class="col-sm-1">
                                <label>HMO</label>
                                <select name="hmo" class="form-control">
                                <option>Yes</option>
                                    <option>No</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="formcontent2">
                    <h6>&nbsp;HMO SPACES&nbsp;</h6>
                    <div class="formcontent1-body">
                        <div class="row ">
                            <div class="col-sm-3">
                                <label>Space | Name</label>
                                <input type="text" class="form-control" name="space_name" placeholder="Name"  />
                            </div>
                            <div class="col-sm-6">
                                <label>Space | Description</label>
                                <input type="text" class="form-control" name="space_desc" placeholder="Description"  />
                            </div>
                            <div class="col-sm-3">  
                                <label></label>                             
                            <span ><i class="fa fa-plus"></i></span>
                        </div>
                        </div>
                    </div>
            </div>

            <br/>
            <div class="formcontent3">
                    <h6>&nbsp;OWNERS&nbsp;</h6>
                    <div class="formcontent1-body">
                        <div class="row ">
                            <div class="col-sm-3">
                                <label>First Owner Name</label>
                                <input type="text" class="form-control" name="first_owner" placeholder="First Owner Name"  />
                            </div>
                            <div class="col-sm-3">
                                <label>Second Owner Name</label>
                                <input type="text" class="form-control" name="second_owner" placeholder="Second Owner Name"  />
                            </div>
                            <div class="col-sm-3">
                                <label>Third Owner Name</label>
                                <input type="text" class="form-control" name="third_owner" placeholder="Third Owner Name"  />
                            </div>
                            <div class="col-sm-3">
                                <label>Fourth Owner Name</label>
                                <input type="text" class="form-control" name="fourth_owner" placeholder="Fourth Owner Name"  />
                            </div>
                        </div>
                    </div>
            </div>
<br/>
            <div class="formcontent4">
                    <h6>&nbsp;HOA DETAILS&nbsp;</h6>
                    <div class="formcontent1-body">
                        <div class="row ">
                            <div class="col-sm-2">
                                <label>HOA-I Company Name</label>
                                <input type="text" class="form-control" name="HOA_company1" placeholder="HOA-I Company Name"  />
                            </div>
                            <div class="col-sm-2">
                                <label>HOA-I Contact Name</label>
                                <input type="text" class="form-control" name="HOA_contact1" placeholder="HOA-I Contact Name"  />
                            </div>
                            <div class="col-sm-2">
                                <label>HOA-I Phone No</label>
                                <input type="text" class="form-control" name="HOA_phone1" placeholder="HOA-I Phone No"  />
                            </div>
                            
                            <div class="col-sm-2">
                                <label>HOA-I Email</label>
                                <input type="email" class="form-control" name="HOA_email1" placeholder="HOA-I Email"  />
                            </div>

                            <div class="col-sm-2">
                                <label>Frequency</label>
                                <input type="text" class="form-control" name="frequency1" placeholder="Frequency"  />
                            </div>

                            <div class="col-sm-2">
                                <label>HOA-I Amount</label>
                                <input type="text" class="form-control" name="HOA_amount1" placeholder="HOA-I Amount"  />
                            </div>
                        </div>

                        <br/>

                        <div class="row">
                            <div class="col-sm-2">
                                <label>HOA-II Company Name</label>
                                <input type="text" class="form-control" name="HOA_company2" placeholder="HOA-II Company Name"  />
                            </div>
                            <div class="col-sm-2">
                                <label>HOA-II Contact Name</label>
                                <input type="text" class="form-control" name="HOA_contact2" placeholder="HOA-II Contact Name"  />
                            </div>
                            <div class="col-sm-2">
                                <label>HOA-II Phone No</label>
                                <input type="text" class="form-control" name="HOA_phone2" placeholder="HOA-II Phone No"  />
                            </div>

                            <div class="col-sm-2">
                                <label>HOA-II Email</label>
                                <input type="email" class="form-control" name="HOA_email2" placeholder="HOA-II Email"  />
                            </div>

                            <div class="col-sm-2">
                                <label>Frequency</label>
                                <input type="text" class="form-control" name="frequency2" placeholder="Frequency"  />
                            </div>

                            <div class="col-sm-2">
                                <label>HOA-II Amount</label>
                                <input type="text" class="form-control" name="HOA_amount2" placeholder="HOA-II Amount"  />
                            </div>
                        </div>
                    </div>
            </div>

<br/>
        
            <div class="formcontent5">
                    <h6>&nbsp;DOCUMENTS&nbsp;</h6>
                    <div class="formcontent1-body">
                        <div class="row ">
                            <div class="col-sm-3">
                                <label>Floor Plan</label>
                                <input type="file" class="form-control" name="floor_plan" placeholder="Floor Plan"  />
                            </div>
                            <div class="col-sm-3">
                                <label>Last Uploaded Floor Plan</label> <br/>
                               <a href="#">Download Floor Plan</a>
                            </div>
                            <div class="col-sm-3">
                                <label>Survey Plan</label>
                                <input type="file" class="form-control" name="survey_plan" placeholder="Survey Plan"  />
                            </div>
                            <div class="col-sm-3">
                            <label>Last Uploaded Survey Plan</label> <br/>
                               <a href="#">Download Survey Plan</a>   </div>
                        </div>
                    </div>
            </div>


<br/>
          
        <div class="realtor">
                <div class="row">
                <div class="col-sm-7">
                <div class="formcontent6">
                    <h6>&nbsp;REALTOR DETAILS&nbsp;</h6>
                    <div class="formcontent1-body">
                        <div class="row">
                            <div class="col-sm-4">
                                <label>Realtor Name</label>
                                <input type="text" class="form-control" name="realtor_name" placeholder="Realtor Name"  />
                            </div>

                            <div class="col-sm-4">
                                <label>Realtor Phone No</label>
                                <input type="text" class="form-control" name="realtor_phone" placeholder="Realtor Phone No"  />
                            </div>

                            <div class="col-sm-4">
                                <label>Realtor Email</label>
                                <input type="text" class="form-control" name="realtor_email" placeholder="Realtor Email"  />
                            </div>

                        </div>
                    </div>
            </div>
                </div>
                <div class="col-sm-5">
                <div class="formcontent7">
                    <h6>&nbsp;ADDITIONAL DETAILS&nbsp;</h6>
                    <div class="formcontent1-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <textarea class="form-control" name="additional"> </textarea>
                            </div>                         

                        </div>
                    </div>
            </div>
                </div>
                    </div>
            </div>
            </div>
        </div>
    </div>
    );
}

export default Content;