import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const prossed = window.confirm("are you sure!!");
    if (prossed) {
      fetch(`https://fathomless-stream-19790.herokuapp.com/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id != id);
          setServices(remaining);
        });
    }
  };

  return (
    <div>
      <h1>Manage services</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button onClick={() => handleDelete(service._id)}>Delete</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
