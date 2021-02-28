import React from "react";

export default function Team() {
  const style = {
    width: "18rem"
  };
  return (
    <div className="row justify-content-center">
      <div className="col-sm-3">
        <div class="card" style={style}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Ayşe Çimen Başar</h5>
            <p class="card-title">Front-End Developer</p>
          </div>
        </div>
      </div>
      <div className="col-sm-3">
        <div class="card" style={style}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Fatih Güvenç</h5>
            <p class="card-title">Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
