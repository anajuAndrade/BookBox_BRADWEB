import '../../css/geralGeneros.css'

const Lirico = () => {
  const categorias = {
    ODE: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCCO9VXRIjSPYny1om9h7xD-Udx3NzE7NN6dmaDZEwRjdwjHGDaHabdro3BJMNXGjNu-G50FmuaDheph2BKx-6cufdtIehL4aRepenOGPIGnun6UNxeq3lVw&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR652TlxD_aceCdqrdhDdY1rkALtykv23ZLVf1l2VJQRmZkXqz1o0gEKqDK6ocXKaW9ELmvlWxlIFAwcBEjp0DLJ8FEEQVbmrATkHaZNItykf2uo_Ru94ou&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRIS3GtEFV9bPzWo57IYlUU9f6ERRlMOC_zULRjK6LfgnvJ5u8-MkRlVtOPqEuW0RCOeoBfn6PgDL4TUO2arWHgHJOjDhb7921hIfUjhH3M',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS3UCCUmPvpJVdvE8pZ5tye44J8dJvHk39paIb6pCeh1ltOt2Q2J_Zkh__VhvW8lQL2Qi7pkg7r6NvfKTuXX5IC8nbuyl86xBzg0ZuphDCvsb7DFA3vp5Hu',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzNBrUqVaAHw0eElfdL3pD6py3T7SyVYobXTVo4XrNW1-AdplqeZ-V0unEdfZq2duo27iZTTXi3Vl53VnAQZNS6miU1iTWSN9xDFtcWsfR',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTX4B9yfRrp6jrmFtCY5iHisrugFgsJWWnnLI6L8lIF19jlzP8ihjs5IrYntbN-N8Y75VQEcFrKvPid0g4qHQeGf2fFKstrSrY62aS0w-Y&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSMcYMLjA5VVt3CURXHKDGhVQ9t5noDWzfCBw7C9ldJOJ6ELzrAQM140oUX2Pkzvb5lsMtp_tztvamFiInwX8D7JU-ApcjelQ&usqp=CAY'
    ],

    ELEGIA: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR4ifaFOdaYExEmyK1tDrORyJWfYxeE9JcaCDcS4Hrw_pj--yWGjJpqdIbU9bkiqkpv2JvIwCgtPHjTIussnYv8wgu8EbZ8jbMIbGeXncY&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuVIZ5uPsg7GbjC-z3kD-oSs0AfUC0jtk0CPMOyUHy8J2U0aP4-MNIGrU6C2yQmQLUfzwXVfY4Gsj1w37Iq18hcUxKfJWu3tmCodf17J-NaGVowu6r4OG6&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRLMDKSRHfKAx03xM9eaWXlcYMzMRwgRQ4fLYgQEQ2A5AllilqEb-L6S-p6ub1-l5GHSY4VZ2-Os0SE4_eAHv-TC4oNZOMzH_0gk6XHUM_Te_8KleU0NTglTQ&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQu-KWnyQ7m0US5d3Vhm0r8ogRpyOGnI7OWYEya8oXPk9K_46Zo7xkEnK1ZvhpNCHXC4p3ffzONx0oivH6YoczcMTGk0pk0Mrw7mxnTEoCTA2ASgL8gvaCH&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQVrc3q4iOCnnF9qxWSc3UXFZkCN4zoaEbV222ju1aMqXDufTt96giNempnW3gcOMLnr91Q3Zy57llzPIQqfxbvMsIxsVZi_yXlTMf7OUfr2Ry93qliyS5&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIt-AFTOiSIa0RD2uTzvnbPoyVwa4HCrS3B80T5b66a8Vpd_uVD2-aP41JhtOFu1dzUmQZuwlu1aM5t4zIZovh-tfQP3kVAY3GCXMTQBQzYzKYd5OquPDG&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTc9FWY_1t2RV29ejygcMxHeWkyKIf2effTa7YaPZoltAO6IfmPwCAzCLx6fRm1bFklwGTfWWteUIZQer2j7Q9wppZtoibQnw-Zk_n_6ITo&usqp=CAE'
    ],

    MADRIGAL: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSal_u4HN-33zfUViwnA-pFNbVlFYxKHgD8i0DVWWc6XrI_krMAX7619Q9BCVhJFq0U7Rlpwk1rm-VZInewry3G4WbO3mGJh8HJKTOoad-DcXC8ikSvYOgxDQ&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQD6aMDxPGUBLc6No6elkUrkiq9PPiojX5iWoxzy9WHryn8ojw-NADnPBdFriqBRh9dMGgrl6wYQx3mDpMcBKC6KQ-ZrlyEShV7b4xZI413&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSELtobY-Ra5IlyT3rTrFBDnN24RzlL6hN4yL0oz56k0iaa8wLA2XNqYE6OiVI0C-5FWwllSof58imttgiuMzVC5Cx6h5RinW2Z2Npdxtbx_bhd_2cM0x_iZA&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGSmf4b8gO-ps6z9dfn3M-wWDNKSdt472kghbukuHr1hSUX39AFuPxoJWGdaDFcbLfghvEIhAi28SpA2-Rc1bK9YRFmcLhtMZHaGnefArl7kzXxCW-9OHK&usqp=CAEhttps://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGSmf4b8gO-ps6z9dfn3M-wWDNKSdt472kghbukuHr1hSUX39AFuPxoJWGdaDFcbLfghvEIhAi28SpA2-Rc1bK9YRFmcLhtMZHaGnefArl7kzXxCW-9OHK&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTb6r8DYPetsJifD7NLeCXarG9GZICyD9l69Qcb18-Iw9osEI9N4QpM7PlcqZ2brv9rXCcKz71mnNzun_ojqXooxFH3a-8mkesZZAKyjSgpI-uJJj8wnEKf&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTuC88VaSbC-4buFrfapHIfJYT2sPHZ_DeNW6_3jIkUZtfVBmw0XrZMsYHwPPs9sCxC9LDkxt0iRRs-nPoehsnjO02aCOfPmQzthpp69HUC&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyqba0F-EA6Q0K26YiyaY5kzjOL6zeRp8glB7ySXVBifZEgfD2-e63qTuNSd2ZEnLNlf4SYPw4fk-8Jg74dB9oVTAh4MC63RaHzr4EIWtJ&usqp=CAE'
    ],

    EPITALÂMIO: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDBDSASuXol-Zmd3myiC4dND8cjKEK5QtshWxbMIHWaufmo_LZvXg7jej3lzK6hYV78NahEGPjxezlJJwAJU8hTu7DRskn3d3g8vRek6vZryHz4rC0Xaa01Q&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRC4VGRsVaj7srSOPHPulVhTCX3JNNyPNVFTDgR_lXAXq42cU41jenadGLLjKk5gV07fl4NP9aKKZCMGVejUkD71GsHrnghgdAIKMnjikA&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSiWYQ8niQDNcpEQkSxQ50yq2thfDQYsKoDrPUNql0xPiWlZG79TR589hc0R3xyRjpV-hDzZvxcL8N-AXchw-qOUoqeJanYKYINllQNt0aZneTx2CjYt4XBqg&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnX1te56wFP0qqGkMHCBMF_a1uyTp3Nn1PP1Zrti2zZ2s8dFhRoFS5_sxeI2Boh_ssJC9F5o9bi7SkOKEuFa47gJW-2rH7W_i3WZClVkA&usqp=CAE',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSlAYcH4UV3PCS_4E-HFo7_z8XHwMdCVQbpE0rgd3mOuFb0JrVtftNoRzfmXUUAlzO4J4HmFrwlkXfZW604qd8r83aYD6Xk1Vq9ifgOfd2jn3iz7aKpsBXPNA&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRODXbiwBsHySMImmPHkbt1H_EKGPdY5E92Wb4V22VHv5xVDE5mM8Hzg2U_Wubp4jTVQh3LWgxiBpykE3jWDoew-8aHd-ylezqRrJ7h6rY&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThRP2-CJUwRQfHC-kd9x56IdHQGC2V9DatgsrUh9SyC1HV7EcIzMWeJBm3IdR7CeMP1qP9CtlZZNYpeYMMm5DkI4ehSbNGtSXdfQOHZgA&usqp=CAE'
    ],

    ÉCLOGA: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCpItIo941zSRnbUQmYS_khTM7xsCIdixeXtQ1ymb3pe4oQcJXH_tOyP6ctAEgSKE3TquwMz1q4mU16qPNWJpE7m8bRN-FtheZLCInmb-z&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0GDbTNJ7FuXsge-x__37jsILbhY2g0gjbdA9dfj9DgPZvA_jmCDPpCowdHMAXI8bSlhgi6gQ_1iwCqKTGbZbwpMO9MY5m5bpkJ9sPFs-DeQHFqppOf6Ro&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSWTfrOYzA0vnTRKN4IExJ_z16rYEfdyRVwAw_4MfR1qe3gNkRmp1YKtpKvYyUR6tpYVd5qeAgghmohLYkPCP9bwUcMDLu7CfW9VeXSUtXV&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRYClsuX4VO8es7DDbF8OPRFiaZk0bbe49nOOKCFX3gEr1ftJq1NBc5ICOV_3CxqqAq4g1eZHGCJDkpdMMkGKyPpJ1h1NweqJtZxu5VlAjHzfoN1rUP4TvROw&usqp=CAE',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQTdY42t2B5skv7Y4hDKx0JFE1OyNSOS1YjGmkLjtJvPHRH3c7LslqUebun8AcgPInJL86NI-xukFKeJeTR2oZwc9Sp7-VzeEp1GPTDg7xqDQJO6Js1GHAc&usqp=CAE',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTIfAEj9vn7leY_g12C6mR3cRnNgmBCIaL7zb8KX9m5jYvOqGLX6MADMoCnDmzAFPbAa2emg3XCMzEMQOv9rryJ_y2XtRB9qgtGE01AMuWc&usqp=CAE',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7dUrVod6mnyzsO-Rk3lVRBu39LDsX7Az4z994uizye5q9-HquR9u9-wMtwKkkYv-ZDeODvbQAQQ2z4OrJK-9LE2gd95DgkxElfqjnw2uberamLPnZijw&usqp=CAE'
    ]
  };

  return (
    <div className="container">
      <h1 className="titulo">LÍRICO</h1>
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

export default Lirico;