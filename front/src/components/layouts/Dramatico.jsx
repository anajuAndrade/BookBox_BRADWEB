import '../../css/geralGeneros.css'

const Dramatico = () => {
  const categorias = {
    TRAGÉDIA: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCWPmAsOQD58hzNTUm5ZszYgQ-2H_eJB_FKyPbilZYZuVzOMBNRaoDeRJoi9VF4ZalwoNgAzoaGlps8-QpTwkYvy0T0W48lqxiQQFIu-Q&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQK00OwCPl00DG-pkEJqLeYU7lHHG6cEcrdvrMutDXIinzE99TPOticSZ_OEuyLxuC9zSr9ueSx6H1ZtK5ImZcdwdisZHqo8B_xVUOJz5ZrHU-ajfJ-t6hH&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR5oRqjjJ4U13ZTH-hcEoW66mgke5NWfWsspG7b067sLZnpTrmAIo4jwGh1Cy0YN9Eo1FeTU8dfvAs9ACp4vRmppehHYADhL9g6VnyJw1cf&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRs2me28ezhNIbfZP1TJrCOlD7RLYztWW4Whfo6vttGb4iissGjaBgAephTnpd-YO7_geG_zIMsRn1gqXn34lJMTQC0gk7s767tpnIS-fo&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQKNjeqn4J7SI9XPoGsXWT1WgRLjIhq38rXm336OE3q0j5szR65WFdoL0xBUsWJY5mEdv_kl-sFbpTnhLIAyRmkVu5Edq8CTOLOxCQFakhBHp8bPOjaJYIFLw&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRUJoSG7qBbAP3yQujukUbNKYSU4Uh3m-3eZSf8ssstmERPPjwYcWdIKZWqbaoT3MaO-DXsERNdJwAq3jOufVj4EVE1060bOIUEipKPylBp&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRQhnaOVNMVrmeeqIHWKnXjK2sTAGwtJUKaTVqD4RAHBNIjTorxRdgvRbVxOOd0ookK6V6KJN5aiQ0lWlw7VQaCTeWtx8Vhznwi6cnwnp0&usqp=CAE'
    ],

    COMÉDIA: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSFlhSOsRCX5XPaNDZ7FmZsVRwxmpKkw8qMNPc41ER28PYklZWm1gh32z4yFO1OP6HPlNrHK-GretVuMmeW_jrX71ZS1UjsWeQtkquIJrlJpkzBN5m-oWc6rw&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTFPEmxKZH3ucYmOwrZ35Yc4tbxKQDlXrjpelxEYmxvKLJz6eeMOofxTiSWTbwvaBmFT3pZ8En81j7E1agrlbR68Wavef-EsSmNrAWd7sH3k-gW_OTTLrxs&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwLKsTHRyVItqw1RXbgf81N5untgGFc5ZW7xupE1PpVPtVf7vrBfIypBQ7ZZm8vX-Q9POy_mru1bSEAxwYyLZsioNo6Hxh-OxHstwyrXsS&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0_dg43xkjkXiqrdAGwjFmMa7P05YOm-lFI5ysBYDH_wBrDJS3DdPTIQaytGCd4rCJoJVfBM4teQ17MdvFbIQqoh6e6N-SIlpcVEIoPxoZtkW6RKAmBlRThg&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSegfW4X8rDazTgbOOS4WwNTrWa_vaWILm1yDm2bOKsWr55pK_4CaNp8L1CCB7NGFRUEUZG_pWA50lbPnctApx3zDGcpfYfbKymnNdVhBETKYWmBnN3U-maEA&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRq0wruaXKSwwjYJkQ4JYslfAtrRxuJzQVvv8Q4b9pzuYi3gvaEx8xjQfaUcORsphjMlmGbWpETaI3ncQevzv3xDN5T5FOPGtiqrOLGIpoGzpx_yIPUE6jFUw&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxwYnA10yHkZZzYFd2ApPxVjP5vlbtdmX8R0oJWQ9YRs6aMfntAHFXcD3ytI_IoL79MW82J3GzSLJeEGLbXrLiLs8xI6VOPQ-6qyFKVQ-6E4TbXJFEmIgP&usqp=CAE'
    ],

    FARSA: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR-TnRFnCcf0uGtft_IN4gFnbAl06Ivs0X1JCCwmJnUMq5ZsA9NMyalBGJi6wSuAEm1vsSX9R9dJOz5I0PU68Cc6bc-Il0vm7wYUfMCsdU&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTbt4QBJfuoVJoCggD2WiuvoT2GFqg1Q9reeHywvH7KRxjFLxOGFZIwRaxooP6U4Zi9R_BfUFWUrr5VZpZFH9U31pvb9OQ4r20a_7kqpbQRmZHJhZihlXzT&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfvLs6K82uKu_LnKrajpOAkaf0PIsTb3-g6G5r3Ekjg27YQG_p-hOLFukVZ4AKnzQESGSLp09yHCDb3EG8bCX-4n8ru8v51UwPkgv3uzuNRBv-XcMIVLi0Eg&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ0sUb0Ohc5kGFgN2aBRRdMXQIlfFIs7NmFGfy2yOZn3H929j7WzAtFJEynA2Xgtw_qf36Q2OkOmAl7GZyK0cLeofzBENAbPw&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKjAeOLr_6rKgWMH1GIw3a8YKd-LhFVhSqi0hjPcRfPmJcWZUYoXIGXiy-pyT1BGXn7nxrYCrcdVEoTvN6nN4ip6Ahv3I78fmLX4fh38jK&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiZxAJ5Yg_Xg6qYwj_KEnXAo5OiPzd_GqVuutBd0cG5ToU5xygBv_KZOioLVvg9vQ3if8t0MCdpxzBEbDdYU2MJzAM9rWTh3-gUjlZN5mfFWobQkUlPR9V-g&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSChl57ruDnOHQhEiuS_hTnwadZYOkL2BoUZHdnxwR0cvbQGc5xKFP29nWASrKuzRC5PdPM69el_e2w5iQCaegDDkDaMIwGdQ7MmX_cO19l&usqp=CAE'
    ],

    AUTO: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnzSo6yKV5tGv3UEixKUHYT_8ANXSDDr1p3P9JSqF7see1wFZWO67za5s1uSPQ9lDiVE0-P3NytkHM1xyNPgVKngYNhfJgK-lxdUYio93RHXiuoVdXdzpx8A&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSF1nnhnqzGKWFrkDlMkLLO29vWxP9fKkSx1NUhmtakatD1wT5nEkYkCWA3DZf88_32XLBmGuTTLbBwM29othGydTwp13_KRLNYItEUvoU&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTtFmp06z3XU6aJPJm4chpwc8HrVaiuB6RI3ATVsRKQH_ocy1GM9Je6-oN2TdRiDamfIzB3BuOE3YIXPcKvOcRAxCxKyeZwlxGUTxI-akK4EX6yRRTa0AXGag&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSUsPHfA7Ieq7eqTRFTNTjgLyLdaF9oQ0zVnxaXIXjjDgreCrHiBhHMuhGwb6ObdUjHEauJH7s6FnTxEDoaiAz_qnjegLWcrbugaZrQXdQ&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSW3joNJfhFPUYil-SvtXlHWLXfDZ0vGBkVVeT333MA7uiooGCfXe1zs1IiibZ6uSVwGGYphSFd_7u6sxJg5K7z6sbhXTP9DQ3jD1HHLWYX8dVIRYCsxdsY8Q&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS5QqeqMRq7yTuWfacAffMc9Q6W-WeV0F4QxZNJtQ7qW7bd7laqwi68myaAbXbOQdXfPlBcXPh3bIm0Srg5ydhk1yXVmG6Nz_4yhCOuDlkdBRAVlmJYdYiC&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQdG3pUzYuS3u6wKYkDO5vjPNRFpxqrFt9ttPTPkFwxQb2RxgU2CvMJQYUbv5xI1rD2-2LiThZ6e6KMUjVsji8DZ6E12dy6fIqyy_zk7UXsbpk7H3aUHURG&usqp=CAE'
    ]
  };

  return (
    <div className="container">
      <h1 className="titulo">DRAMÁTICO</h1>
      {Object.entries(categorias).map(([categoria, imagens]) => (
        <div key={categoria} className="categoria">
          <h2 className="subtitulo">{categoria}</h2>
          <div className="livros">
            {imagens.map((url, index) => (
              <div
                key={index}
                className="card"
                style={{ backgroundImage: `url(${url})` }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dramatico;