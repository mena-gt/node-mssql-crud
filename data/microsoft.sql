GO
DROP DATABASE IF EXISTS [mssqltest]
GO
CREATE DATABASE [mssqltest]
GO
USE [mssqltest]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cart](
	[cart_code] [int] NOT NULL,
	[cart_created] [datetime] NOT NULL,
    CONSTRAINT [PK_cart] PRIMARY KEY CLUSTERED ([cart_code] ASC)
    WITH (PAD_INDEX = OFF, 
          STATISTICS_NORECOMPUTE = OFF, 
          IGNORE_DUP_KEY = OFF, 
          ALLOW_ROW_LOCKS = ON, 
          ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cart_detail](
	[detail_cart] [int] NOT NULL,
	[detail_product] [int] NOT NULL,
	[detail_quantity] [int] NOT NULL,
	[detail_price] [decimal](14, 2) NOT NULL,
    CONSTRAINT [PK_cart_detail] PRIMARY KEY CLUSTERED ([detail_cart] ASC, [detail_product] ASC)
    WITH (PAD_INDEX = OFF, 
          STATISTICS_NORECOMPUTE = OFF, 
          IGNORE_DUP_KEY = OFF, 
          ALLOW_ROW_LOCKS = ON, 
          ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[category](
	[category_code] [int] NOT NULL,
	[category_name] [nvarchar](255) NOT NULL,
    CONSTRAINT [PK_category] PRIMARY KEY CLUSTERED ([category_code] ASC)
    WITH (PAD_INDEX = OFF, 
          STATISTICS_NORECOMPUTE = OFF, 
          IGNORE_DUP_KEY = OFF, 
          ALLOW_ROW_LOCKS = ON, 
          ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[product_code] [int] NOT NULL,
	[product_created] [datetime] NOT NULL,
	[product_title] [nvarchar](255) NOT NULL,
	[product_slug] [nvarchar](255) NOT NULL,
	[product_description] [text] NOT NULL,
	[product_price] [decimal](14, 2) NOT NULL,
	[product_stock] [int] NOT NULL,
	[product_category] [int] NOT NULL,
    CONSTRAINT [PK_product] PRIMARY KEY CLUSTERED ([product_code] ASC)
    WITH (PAD_INDEX = OFF, 
          STATISTICS_NORECOMPUTE = OFF, 
          IGNORE_DUP_KEY = OFF, 
          ALLOW_ROW_LOCKS = ON, 
          ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[cart_detail] 
    WITH CHECK ADD CONSTRAINT [FK_cart_detail_cart] 
        FOREIGN KEY([detail_cart])
        REFERENCES [dbo].[cart] ([cart_code])
GO
ALTER TABLE [dbo].[cart_detail] 
    CHECK CONSTRAINT [FK_cart_detail_cart]
GO
ALTER TABLE [dbo].[cart_detail] 
    WITH CHECK ADD  CONSTRAINT [FK_cart_detail_product]
    FOREIGN KEY([detail_product])
    REFERENCES [dbo].[product] ([product_code])
GO
ALTER TABLE [dbo].[cart_detail]
    CHECK CONSTRAINT [FK_cart_detail_product]
GO
ALTER TABLE [dbo].[product]
    WITH CHECK ADD  CONSTRAINT [FK_product_category]
    FOREIGN KEY([product_category])
    REFERENCES [dbo].[category] ([category_code])
GO
ALTER TABLE [dbo].[product] 
    CHECK CONSTRAINT [FK_product_category]
GO
