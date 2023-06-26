let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

function defaultOwner() {
  return { ...defaultOwner };
}

function handleDefaultOwner(arg) {
  defaultOwner = arg;
}

spaceship.owner = getDefaultOwner();
