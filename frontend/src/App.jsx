import React from "react";
import { useEffect, useState } from "react";
import { apiGet } from "./api";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skill, setSkill] = useState("");
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState(null);

  const loadProfile = async () => {
    const data = await apiGet("/profile");
    setProfile(data);
  };

  const loadProjects = async () => {
  const data = await apiGet(`/projects?skill=${skill}`);

  // If backend returns { projects: [] } (pagination response)
  if (data?.projects && Array.isArray(data.projects)) {
    setProjects(data.projects);
  } else {
    // If backend returns [] directly (old response)
    setProjects(data);
  }
};


  const handleSearch = async () => {
    const data = await apiGet(`/search?q=${query}`);
    setSearchData(data);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>API Playground - Candidate Profile</h1>

      <button onClick={loadProfile}>Reload Profile</button>

      <hr />

      <h2>Profile</h2>
      {profile ? (
        <div>
          <p><b>Name:</b> {profile.name}</p>
          <p><b>Email:</b> {profile.email}</p>

          <p><b>Skills:</b> {profile.skills?.join(", ")}</p>

          <p><b>Education:</b></p>
          <ul>
            {profile.education?.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <hr />

      <h2>Projects Filter</h2>
      <input
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder="Enter skill e.g. travel"
      />
      <button onClick={loadProjects}>Get Projects</button>

      <ul>
  {Array.isArray(projects) && projects.length > 0 ? (
    projects.map((p, i) => (
      <li key={i}>
        <b>{p.title}</b> - {p.description}
      </li>
    ))
  ) : (
    <p>No projects found</p>
  )}
</ul>


      <hr />

      <h2>Search</h2>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search something..."
      />
      <button onClick={handleSearch}>Search</button>

      {searchData && (
        <div style={{ marginTop: "10px" }}>
          <h3>Search Results</h3>
          <pre>{JSON.stringify(searchData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
