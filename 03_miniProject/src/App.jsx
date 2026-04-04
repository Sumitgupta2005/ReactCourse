import React from 'react'
import Cards from './Components/Cards';

const App = () => {
  const jobs = [
    {
      companyLogo: "https://imgs.search.brave.com/98dRkyZ1zeADFpvad5k21xmSSuHXk_AS3K8aLxVI7Cw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/OS84Ny9hbWF6b24t/aWNvbi1ibGFjay1h/bmQtd2hpdGUtdmVj/dG9yLTM0MjQzOTg3/LmpwZw",
      companyName: "Amazon",
      days: "5 days ago",
      post: "Senior Software Developer",
      hour: "$120/hr"
    },
    {
      companyLogo: "https://imgs.search.brave.com/cuHY22aFSzcRM6cHiGZEgGw29EzGiTAhLjBfeo2NnlY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/Njc4LzE3Ni9zbWFs/bC9nb29nbGUtbG9n/by1pY29uLWZyZWUt/cG5nLnBuZw",
      companyName: "Google",
      days: "2 days ago",
      post: "Frontend Engineer",
      hour: "$110/hr"
    },
    {
      companyLogo: "https://imgs.search.brave.com/R_nB1PngmkcRATrLLVejmsMOiUoCyjZkvpj1936TU8c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L21pY3Jvc29mdC1s/b2dvLWltYWdlLTIz/LnBuZw",
      companyName: "Microsoft",
      days: "1 week ago",
      post: "Backend Developer",
      hour: "$115/hr"
    },
    {
      companyLogo: "https://imgs.search.brave.com/ruLHTGN9H6dsJ1T7enQdh4ZdowB8bYedsx2o5GiafoE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/Mjk3NjQ3YzdlYzc2/YjgyZmIyMWZjZTMu/cG5n",
      companyName: "Netflix",
      days: "3 days ago",
      post: "Full Stack Developer",
      hour: "$130/hr"
    },
    {
      companyLogo: "https://imgs.search.brave.com/zx7cxNMKmQOnZfpcwQbaxGEQVAHp_m6pV_e2gqJCE1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/NDk1LzIwNy9zbWFs/bC9tZXRhLWxvZ28t/cm91bmRlZC1nbG9z/c3ktaWNvbi13aXRo/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n",
      companyName: "Meta",
      days: "4 weeks ago",
      post: "React Developer",
      hour: "$125/hr"
    },
    {
      companyLogo: "https://imgs.search.brave.com/PaEPYpRQV5ZOViC3PzEHHTgAMCWH3NoBzzDq2yIa6IE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2FwcGxlLWxvZ28t/cG5nL2FwcGxlLWxv/Z28taWNvbi0xNi5w/bmc",
      companyName: "Apple",
      days: "6 days ago",
      post: "iOS Developer",
      hour: "$135/hr"
    },
    {
      companyLogo: "https://imgs.search.brave.com/hMOXseVi663h2-Ul0fmpueIYOGxRXMGVzIOID_5XLUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQWRv/YmUtTG9nby1QTkct/UGljdHVyZS5wbmc",
      companyName: "Adobe",
      days: "1 day ago",
      post: "UI/UX Designer",
      hour: "$100/hr"
    },
    {
      companyLogo: "https://imgs.search.brave.com/pxnVl2e6h7DzoUB7XLGfhK_uQEKE-fiyU6gf4lAe_k4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3ViZXItbG9nby10/ZXh0LXBuZy0xLnBu/Zw",
      companyName: "Uber",
      days: "2 weeks ago",
      post: "Data Analyst",
      hour: "$90/hr"
    },
    {
      companyLogo: "https://imgs.search.brave.com/PCtS5t-l5N2bDendLfSFk6UjxqoJZ2cHnHTW0y9emio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/Ny8yMi9zcG90aWZ5/LXNvY2lhbC1tZWRp/YS1sb2dvLWFic3Ry/YWN0LXN5bWJvbC1k/ZXNpZ24tdmVjdG9y/LTQyODcwNzIyLmpw/Zw",
      companyName: "Spotify",
      days: "3 weeks ago",
      post: "DevOps Engineer",
      hour: "$105/hr"
    },
    {
      companyLogo: "https://imgs.search.brave.com/E9GvfK9q2gOUHQrpERm3PWqphnzspNsPBwOnm-HvwP4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvODQ2/NTc5LmpwZw",
      companyName: "Tesla",
      days: "5 days ago",
      post: "Machine Learning Engineer",
      hour: "$140/hr"
    }
  ];


  return (
    <>
      <div className="pCards">
        <Cards logo={jobs[0].companyLogo} name={jobs[0].companyName} days={jobs[0].days} post={jobs[0].post} hour={jobs[0].hour} />
        <Cards logo={jobs[1].companyLogo} name={jobs[1].companyName} days={jobs[1].days} post={jobs[1].post} hour={jobs[1].hour} />
        <Cards logo={jobs[2].companyLogo} name={jobs[2].companyName} days={jobs[2].days} post={jobs[2].post} hour={jobs[2].hour} />
        <Cards logo={jobs[3].companyLogo} name={jobs[3].companyName} days={jobs[3].days} post={jobs[3].post} hour={jobs[3].hour} />
        <Cards logo={jobs[4].companyLogo} name={jobs[4].companyName} days={jobs[4].days} post={jobs[4].post} hour={jobs[4].hour} />
        <Cards logo={jobs[5].companyLogo} name={jobs[5].companyName} days={jobs[5].days} post={jobs[5].post} hour={jobs[5].hour} />
        <Cards logo={jobs[6].companyLogo} name={jobs[6].companyName} days={jobs[6].days} post={jobs[6].post} hour={jobs[6].hour} />
        <Cards logo={jobs[7].companyLogo} name={jobs[7].companyName} days={jobs[7].days} post={jobs[7].post} hour={jobs[7].hour} />
        <Cards logo={jobs[8].companyLogo} name={jobs[8].companyName} days={jobs[8].days} post={jobs[8].post} hour={jobs[8].hour} />
        <Cards logo={jobs[9].companyLogo} name={jobs[9].companyName} days={jobs[9].days} post={jobs[9].post} hour={jobs[9].hour} />
        {/* <Cards logo={jobs[10].companyLogo} name={jobs[10].companyName} days={jobs[10].days} post={jobs[10].post} hour={jobs[10].hour} /> */}


      </div>
    </>
  )
}
// export default jobs;
export default App
