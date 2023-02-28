import CreateProposalButton from "../Components/CreateProposalButton";
import CustomIcon from "../Components/CustomIcon";
import PolicyCreatedDot from "../Components/PolicyCreatedDot";
import "../Pages/PSSidebar.scss";
import Tabmenus from "../Components/Tabmenus";
const MainContent = () => {
  const items = [
    { label: "Plan Detail" },
    { label: "Proposer Detail" },
    { label: "Insurer Detail" },
  ];
  return (
    <article className="col-7">
      <div className="row g-0">
        <div className="d-flex align-items-center justify-content-end p-3 pb-0">
          <CreateProposalButton />
        </div>
      </div>
      <div
        className="row g-0 align-content-start overflow-overlay"
        style={{ height: "calc((100vh - 78px) - 68px)" }}
      >
        <div className="d-flex align-items-center justify-content-between p-3">
          <div className="d-flex flex-column">
            <span className="fz-24 mb-1">Dinesh Kumar</span>
            <div>
              <span className="fz-16  me-2">
                P/2478/3243/324/343</span>
                <span>
                  <CustomIcon name="info-circle" />
                </span>
            </div>
            <div className="d-flex">
              <span className="border fz-12 py-1 px-2 me-3 rounded text-success d-flex align-items-center lh-sm">
                <PolicyCreatedDot />
              </span>
              <div className="border fz-12 py-1 px-3 rounded lh-sm">STP</div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center justify-content-end">
              <div className="me-4 d-flex align-items-center justify-content-end p-2">
                <span className=" px-1 me-2 fz-24">
                  <CustomIcon name="whatsapp" />
                </span>
                <span className=" px-1 me-2 fz-24">
                  <CustomIcon name="envelope" />
                </span>
                <span className=" px-1 me-2 fz-24">
                  <CustomIcon name="comments" />
                </span>
                <span className=" px-1 me-2 fz-24">
                  <CustomIcon name="phone" />
                </span>
              </div>
              <span className="fz-24"></span>
            </div>
            <span className="fz-12 text-primary d-flex align-items-center justify-content-between">
              <u className="me-2 pe-4">Copy Link</u>
              <u>Edit Proposal</u>
            </span>
          </div>
        </div>
        <div className="pt-3 px-3">
          <div className="row g-0 bg-info bg-opacity-10 rounded">
            <div className="col-3 py-4 text-center position-relative">
              <div className="top-0 start-50 ms-n1 position-absolute">
                <CustomIcon name="circle-fill" color="text-primary" />
              </div>
              <div className="fw-bold">Status Name</div>
            </div>
            <div className="col-3 py-4 text-center position-relative">
              <div className="top-0 start-50 ms-n1 position-absolute">
                <CustomIcon name="circle-fill" color="text-primary" />
              </div>
              <div className="fw-bold">Status Name</div>
            </div>
            <div className="col-3 py-4 text-center position-relative">
              <div className="top-0 start-50 ms-n1 position-absolute">
                <CustomIcon name="circle-fill" color="text-primary" />
              </div>
              <div className="fw-bold">Status Name</div>
            </div>
            <div className="col-3 py-4 text-center position-relative">
              <div className="top-0 start-50 ms-n1 position-absolute">
                <CustomIcon name="circle-fill" color="text-primary" />
              </div>
              <div className="fw-bold">Status Name</div>
            </div>
          </div>
        </div>

        <div className="pt-4 px-3">
          <div className="row g-0">
            <div className="col-4">
              <div className="text-secondary fz-12">
                <span className="me-2">Proposal No</span>
                <CustomIcon name="info-circle" />
              </div>
              <span className="fz-14 fw-bold">R/121300/01/2023/003452</span>
            </div>
            <div className="col-4">
              <div className="text-secondary fz-12">Product Name</div>
              <span className="fz-14 fw-bold">Star Health Insurance</span>
            </div>
            <div className="col-4">
              <div className="text-secondary fz-12">Premium Amount</div>
              <span className="fz-14 fw-bold">₹ 2,70,000 +GST</span>
            </div>
          </div>
        </div>
        <div className="pt-4 px-3">
          <div className="row g-0">
            <div className="col-4">
              <div className="text-secondary fz-12">Type of Purchase</div>
              <span className="fz-14 fw-bold">Advisor Assisted</span>
            </div>
            <div className="col-4">
              <div className="text-secondary fz-12">Last Updated</div>
              <span className="fz-14 fw-bold">2days ago</span>
            </div>
          </div>
        </div>
        <div className="mt-2 pt-4 px-3">
          <div className=" d-flex justify-content-between pb-2">
            <Tabmenus items={items} />
          </div>
          <div className="border-bottom d-flex justify-content-between pb-1">
            <h5 className="m-0"> Plan Detail </h5>
            <div className="d-flex align-items-center text-info">
              <CustomIcon name="pencil" />
              <span className="fw-bold">Edit</span>
            </div>
          </div>

          <div className="row g-0 py-4">
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">Start Date</div>
              <span className="fz-14 fw-bold">07/09/2022</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">End Date</div>
              <span className="fz-14 fw-bold">06/09/2023</span>
            </div>
            <div className="col-3 pb-4">
              <div className="text-secondary fz-12">Policy Type</div>
              <span className="fz-14 fw-bold">Fresh Policy</span>
            </div>
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">Policy Period (Years)</div>
              <span className="fz-14 fw-bold">1</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">Scheme</div>
              <span className="fz-14 fw-bold">2A</span>
            </div>
            <div className="col-3 pb-4">
              <div className="text-secondary fz-12">Sum Insured</div>
              <span className="fz-14 fw-bold">5,00,000</span>
            </div>
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">
                Please Choose your payment option:
              </div>
              <span className="fz-14 fw-bold">Full Payment</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">Select your plan </div>
              <span className="fz-14 fw-bold">Half Yearly EMI Plan</span>
            </div>
          </div>
          <div className="border-bottom d-flex justify-content-between pb-1">
            <h5 className="m-0"> Proposer Detail </h5>
            <div className="d-flex align-items-center text-info">
              <CustomIcon name="pencil" />
              <span className="fw-bold font-size-1rem">Edit</span>
            </div>
          </div>

          <div className="row g-0 py-4">
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">Name</div>
              <span className="fz-14 fw-bold">Test</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">Date of Birth</div>
              <span className="fz-14 fw-bold">06/09/2004</span>
            </div>
            <div className="col-3 pb-4">
              <div className="text-secondary fz-12">Mobile</div>
              <span className="fz-14 fw-bold">8220320358</span>
            </div>
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">Email</div>
              <span className="fz-14 fw-bold">vizv64414@gmail.com</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">Occupation</div>
              <span className="fz-14 fw-bold">production workers</span>
            </div>
            <div className="col-3 pb-4">
              <div className="text-secondary fz-12">Gender</div>
              <span className="fz-14 fw-bold">Male</span>
            </div>
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">Annual income</div>
              <span className="fz-14 fw-bold">400000</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">Nationality</div>
              <span className="fz-14 fw-bold">Indian Citizen</span>
            </div>
          </div>

          <div className="border-bottom d-flex justify-content-between pb-1">
            <h5 className="m-0 color-primary">Insurer Detail </h5>
          </div>

          <div className="d-flex justify-content-between pb-1">
            <h6 className="fz-12 fw-bold">Insured Details 1</h6>
            <div className="d-flex align-items-center text-info">
              <CustomIcon name="pencil" />
              <span className="fw-bold">Edit</span>
            </div>
          </div>
          <div className="row g-0 py-4">
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">
                Relationship with Proposer
              </div>
              <span className="fz-14 fw-bold">SPOUSE</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">Name</div>
              <span className="fz-14 fw-bold">Karthick</span>
            </div>
            <div className="col-3 pb-4">
              <div className="text-secondary fz-12">Date of Birth</div>
              <span className="fz-14 fw-bold">07/09/2004</span>
            </div>
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">Gender</div>
              <span className="fz-14 fw-bold">Male</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">Height(cms)</div>
              <span className="fz-14 fw-bold">180</span>
            </div>
            <div className="col-3 pb-4">
              <div className="text-secondary fz-12">Weight(Kgs)</div>
              <span className="fz-14 fw-bold">75</span>
            </div>
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">Ocupation</div>
              <span className="fz-14 fw-bold">PROFESSIONAL-ENGINEER</span>
            </div>
          </div>

          <div className="d-flex justify-content-between pb-1">
            <h6 className="fz-12 fw-bold">Insured Details 2</h6>
            <div className="d-flex align-items-center text-info">
              <CustomIcon name="pencil" />
              <span className="fw-bold">Edit</span>
            </div>
          </div>
          <div className="row g-0 py-4">
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">
                Relationship with Proposer
              </div>
              <span className="fz-14 fw-bold">SPOUSE</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">Name</div>
              <span className="fz-14 fw-bold">Karthick</span>
            </div>
            <div className="col-3 pb-4">
              <div className="text-secondary fz-12">Date of Birth</div>
              <span className="fz-14 fw-bold">07/09/2004</span>
            </div>
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">Gender</div>
              <span className="fz-14 fw-bold">Male</span>
            </div>
            <div className="col-4 pb-4">
              <div className="text-secondary fz-12">Height(cms)</div>
              <span className="fz-14 fw-bold">180</span>
            </div>
            <div className="col-3 pb-4">
              <div className="text-secondary fz-12">Weight(Kgs)</div>
              <span className="fz-14 fw-bold">75</span>
            </div>
            <div className="col-5 pb-4">
              <div className="text-secondary fz-12">Ocupation</div>
              <span className="fz-14 fw-bold">PROFESSIONAL-ENGINEER</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default MainContent;
