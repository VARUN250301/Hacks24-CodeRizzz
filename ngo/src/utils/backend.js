import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

export async function createJob(position, location, date, tags, desc) {
  try {
    const res = await axios.post("/jobs", {
      company: localStorage.getItem("company"),
      position,
      location,
      date,
      tags,
      desc,
      createdBy: localStorage.getItem("email") || "sainath@gmail.com",
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function createInitiative(type, name, about, metric, potenitalImpactMetric, successStory, sectors,tags, email, location) {
  try {
    const res = await axios.post("/csr/initiatives", {
      type,
      name,
      about,
      metric,
      potenitalImpactMetric,
      successStory,
      sectors,
      tags,
      email,
      location 
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}


// export async function getJobs() {
//   try {
//     const res = await axios.get(
//       "/jobs/creator/" + encodeURI(localStorage.getItem("email"))
//     );
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// }


export async function getInitiatives(email) {
  try {
    console.log(email);
    const res = await axios.post("/csr/owninitiatives/", {email});
    return res.data;
  } catch (error) {
    console.log(error);
  }
}


export async function getUsers(userIds) {
  try {
    const res = await axios.post("/users", { userIds });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getApplications(email) {
  try {
    const res = await axios.post("/applications/ownapplications/",{ email});
    console.log(email);
    console.log("Hell");
    return res.data;
  } catch (error) {
    console.log(error);
  }

}
