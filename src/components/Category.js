import React from "react";
import { Card, Text, Spacer, Tag, Button } from "@findnlink/ui";
import scss from "./Category.module.scss";

function Category({ name, organisationen }) {
  return (
    <div className={scss.category}>
      <div
        style={{
          textAlign: "center",
          margin: "30px 0px 50px 0px",
          fontSize: "35px",
          fontWeight: "bold",
          color: "var(--text100)",
        }}
      >
        {name}
      </div>
      <Spacer />
      <div className={scss.organisationWrapper}>
        {organisationen.map((org, i) => {
          return (
            <div key={i}>
              <Card>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text scale="xl" weight="bold">
                    {org.name}
                  </Text>
                  <Button>
                    <a
                      href={org.url}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        color: "var(--text100)",
                      }}
                    >
                      zur Website
                    </a>
                  </Button>
                </div>
                <Spacer />
                <Text>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12.074"
                      height="17.249"
                      viewBox="0 0 12.074 17.249"
                      style={{ marginRight: "10px" }}
                    >
                      <path
                        id="Icon_material-location-on"
                        data-name="Icon material-location-on"
                        d="M13.537,3A6.033,6.033,0,0,0,7.5,9.037c0,4.528,6.037,11.212,6.037,11.212s6.037-6.684,6.037-11.212A6.033,6.033,0,0,0,13.537,3Zm0,8.193a2.156,2.156,0,1,1,2.156-2.156A2.157,2.157,0,0,1,13.537,11.193Z"
                        transform="translate(-7.5 -3)"
                        fill="#a7a8a8"
                      />
                    </svg>
                    {org.ort}
                  </div>
                </Text>
                <div className={scss.tags}>
                  {org.tags.map((tag, id) => (
                    <Tag scale="s" primary key={id}>
                      {tag}
                    </Tag>
                  ))}
                </div>
                <Spacer />
                <Text>{org.description}</Text>
                <Spacer />
              </Card>
              <Spacer />
            </div>
          );
        })}
      </div>

      <Spacer />
    </div>
  );
}

export default Category;
